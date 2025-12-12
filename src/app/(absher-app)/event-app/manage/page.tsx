"use client";

import {
  useCreateEvent,
  useDeleteEvent,
  useEvents,
  useUpdateEvent,
} from "@/api/queries";
import type { CreateEventInput, Event } from "@/api/types";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuCircleCheck, LuPen, LuPlus, LuTrash2, LuX } from "react-icons/lu";
import { z } from "zod";
import Breadcrumb from "../../tabaani-app/_components/Breadcrumb";

const eventFormSchema = z.object({
  name: z.string().min(3, "اسم الفعالية يجب أن يكون 3 أحرف على الأقل"),
  description: z.string().optional(),
  city: z.string().min(2, "المدينة مطلوبة"),
  latitude: z.string().min(1, "خط العرض مطلوب").regex(/^-?\d+\.?\d*$/, "خط العرض يجب أن يكون رقم صحيح"),
  longitude: z.string().min(1, "خط الطول مطلوب").regex(/^-?\d+\.?\d*$/, "خط الطول يجب أن يكون رقم صحيح"),
  registrationLink: z.string().url("رابط التسجيل يجب أن يكون رابط صحيح"),
  startDate: z.string().min(1, "تاريخ البداية مطلوب"),
  endDate: z.string().min(1, "تاريخ النهاية مطلوب"),
  category: z.string().optional(),
  imageUrl: z.string().url("رابط الصورة يجب أن يكون رابط صحيح").optional().or(z.literal("")),
}).refine((data) => {
  const start = new Date(data.startDate);
  const end = new Date(data.endDate);
  return end >= start;
}, {
  message: "تاريخ النهاية يجب أن يكون بعد أو يساوي تاريخ البداية",
  path: ["endDate"],
});

type EventFormData = z.infer<typeof eventFormSchema>;

type StatusMessage = {
  type: 'success' | 'error';
  message: string;
} | null;

function ManageEventsContent() {
  const { data: eventsData, isLoading, error } = useEvents();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [statusMessage, setStatusMessage] = useState<StatusMessage>(null);

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const createEvent = useCreateEvent({
    onSuccess: () => {
      setStatusMessage({ type: 'success', message: 'تم إنشاء الفعالية بنجاح' });
    },
    onError: () => {
      setStatusMessage({ type: 'error', message: 'حدث خطأ أثناء إنشاء الفعالية' });
    },
  });

  const updateEvent = useUpdateEvent({
    onSuccess: () => {
      setStatusMessage({ type: 'success', message: 'تم تحديث الفعالية بنجاح' });
    },
    onError: () => {
      setStatusMessage({ type: 'error', message: 'حدث خطأ أثناء تحديث الفعالية' });
    },
  });

  const deleteEvent = useDeleteEvent({
    onSuccess: () => {
      setStatusMessage({ type: 'success', message: 'تم حذف الفعالية بنجاح' });
    },
    onError: () => {
      setStatusMessage({ type: 'error', message: 'حدث خطأ أثناء حذف الفعالية' });
    },
  });

  const createForm = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      name: "",
      description: "",
      city: "",
      latitude: "",
      longitude: "",
      registrationLink: "",
      startDate: "",
      endDate: "",
      category: "",
      imageUrl: "",
    },
  });

  const editForm = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      name: "",
      description: "",
      city: "",
      latitude: "",
      longitude: "",
      registrationLink: "",
      startDate: "",
      endDate: "",
      category: "",
      imageUrl: "",
    },
  });

  const handleCreateClick = () => {
    createForm.reset();
    setIsCreateDialogOpen(true);
  };

  const handleEditClick = (event: Event) => {
    setSelectedEvent(event);
    editForm.reset({
      name: event.name,
      description: event.description || "",
      city: event.city,
      latitude: event.latitude,
      longitude: event.longitude,
      registrationLink: event.registrationLink,
      startDate: event.startDate.split("T")[0],
      endDate: event.endDate.split("T")[0],
      category: event.category || "",
      imageUrl: event.imageUrl || "",
    });
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (event: Event) => {
    setSelectedEvent(event);
    setIsDeleteDialogOpen(true);
  };

  const handleCreateSubmit = async (data: EventFormData) => {
    try {
      await createEvent.mutateAsync(data);
      setIsCreateDialogOpen(false);
      createForm.reset();
    } catch {
      // Error toast is handled in mutation onError callback
    }
  };

  const handleUpdateSubmit = async (data: EventFormData) => {
    if (!selectedEvent) return;

    try {
      await updateEvent.mutateAsync({
        eventId: selectedEvent.id,
        eventData: data,
      });
      setIsEditDialogOpen(false);
      setSelectedEvent(null);
      editForm.reset();
    } catch {
      // Error toast is handled in mutation onError callback
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedEvent) return;

    try {
      await deleteEvent.mutateAsync(selectedEvent.id);
      setIsDeleteDialogOpen(false);
      setSelectedEvent(null);
    } catch {
      // Error toast is handled in mutation onError callback
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 w-full">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "الفعاليات والمؤتمرات", href: "/event-app" },
              { label: "إدارة الفعاليات" },
            ]}
          />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl max-w-2xl mb-2">
                <span className="text-primary-500">إدارة</span> الفعاليات
              </h2>
              <p className="text-lg text-neutral-600">
                إضافة وتعديل وحذف الفعاليات
              </p>
            </div>
            <Button
              onClick={handleCreateClick}
              className="flex items-center gap-2"
              size="lg"
            >
              <LuPlus size={20} />
              <span>إضافة فعالية جديدة</span>
            </Button>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                statusMessage.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <LuCircleCheck className="w-5 h-5 flex-shrink-0" />
              ) : (
                <LuX className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="font-medium">{statusMessage.message}</p>
            </div>
          )}

          {/* Events Table */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner className="w-8 h-8" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">حدث خطأ أثناء تحميل الفعاليات</p>
            </div>
          ) : eventsData && eventsData.data.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary-500">
                    <TableHead className="text-right text-primary-50">
                      اسم الفعالية
                    </TableHead>
                    <TableHead className="text-right text-primary-50">
                      المدينة
                    </TableHead>
                    <TableHead className="text-right text-primary-50">
                      الفئة
                    </TableHead>
                    <TableHead className="text-right text-primary-50">
                      تاريخ البداية
                    </TableHead>
                    <TableHead className="text-right text-primary-50">
                      تاريخ النهاية
                    </TableHead>
                    <TableHead className="text-right text-primary-50">
                      الإجراءات
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eventsData.data.map((event) => (
                    <TableRow key={event.id} className="hover:bg-neutral-50">
                      <TableCell className="font-medium text-neutral-800">
                        {event.name}
                      </TableCell>
                      <TableCell className="text-neutral-700">
                        {event.city}
                      </TableCell>
                      <TableCell className="text-neutral-700">
                        {event.category || "-"}
                      </TableCell>
                      <TableCell className="text-neutral-700">
                        {formatDate(event.startDate)}
                      </TableCell>
                      <TableCell className="text-neutral-700">
                        {formatDate(event.endDate)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="light-outline"
                            size="sm"
                            onClick={() => handleEditClick(event)}
                            className="flex items-center gap-1"
                          >
                            <LuPen size={16} />
                            <span>تعديل</span>
                          </Button>
                          <Button
                            variant="error-solid"
                            size="sm"
                            onClick={() => handleDeleteClick(event)}
                            className="flex items-center gap-1"
                          >
                            <LuTrash2 size={16} />
                            <span>حذف</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-lg">
              <p className="text-neutral-600">لا توجد فعاليات حالياً</p>
            </div>
          )}

          {/* Create Event Dialog */}
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-neutral-200">
              <DialogHeader>
                <DialogTitle className="text-neutral-800">إضافة فعالية جديدة</DialogTitle>
              </DialogHeader>
              <form onSubmit={createForm.handleSubmit(handleCreateSubmit)}>
                <div className="space-y-4 py-4">
                  <div>
                    <label htmlFor="create-name" className="block text-sm font-medium mb-2 text-neutral-700">
                      اسم الفعالية *
                    </label>
                    <Input
                      id="create-name"
                      {...createForm.register("name")}
                      placeholder="أدخل اسم الفعالية"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {createForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="create-description" className="block text-sm font-medium mb-2 text-neutral-700">
                      الوصف
                    </label>
                    <Textarea
                      id="create-description"
                      {...createForm.register("description")}
                      placeholder="أدخل وصف الفعالية"
                      rows={3}
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {createForm.formState.errors.description && (
                      <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="create-city" className="block text-sm font-medium mb-2 text-neutral-700">
                        المدينة *
                      </label>
                      <Input
                        id="create-city"
                        {...createForm.register("city")}
                        placeholder="الرياض، جدة، الدمام..."
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {createForm.formState.errors.city && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="create-category" className="block text-sm font-medium mb-2 text-neutral-700">
                        الفئة
                      </label>
                      <Input
                        id="create-category"
                        {...createForm.register("category")}
                        placeholder="ثقافي، رياضي، تقني..."
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {createForm.formState.errors.category && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.category.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="create-latitude" className="block text-sm font-medium mb-2 text-neutral-700">
                        خط العرض *
                      </label>
                      <Input
                        id="create-latitude"
                        {...createForm.register("latitude")}
                        placeholder="24.7136"
                        dir="ltr"
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {createForm.formState.errors.latitude && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.latitude.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="create-longitude" className="block text-sm font-medium mb-2 text-neutral-700">
                        خط الطول *
                      </label>
                      <Input
                        id="create-longitude"
                        {...createForm.register("longitude")}
                        placeholder="46.6753"
                        dir="ltr"
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {createForm.formState.errors.longitude && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.longitude.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="create-registration" className="block text-sm font-medium mb-2 text-neutral-700">
                      رابط التسجيل *
                    </label>
                    <Input
                      id="create-registration"
                      {...createForm.register("registrationLink")}
                      placeholder="https://example.com/register"
                      dir="ltr"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {createForm.formState.errors.registrationLink && (
                      <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.registrationLink.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="create-start-date" className="block text-sm font-medium mb-2 text-neutral-700">
                        تاريخ البداية *
                      </label>
                      <Input
                        id="create-start-date"
                        type="date"
                        {...createForm.register("startDate")}
                        className="bg-white border-neutral-300 text-neutral-900"
                      />
                      {createForm.formState.errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.startDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="create-end-date" className="block text-sm font-medium mb-2 text-neutral-700">
                        تاريخ النهاية *
                      </label>
                      <Input
                        id="create-end-date"
                        type="date"
                        {...createForm.register("endDate")}
                        className="bg-white border-neutral-300 text-neutral-900"
                      />
                      {createForm.formState.errors.endDate && (
                        <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.endDate.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="create-image" className="block text-sm font-medium mb-2 text-neutral-700">
                      رابط الصورة
                    </label>
                    <Input
                      id="create-image"
                      {...createForm.register("imageUrl")}
                      placeholder="https://example.com/image.jpg"
                      dir="ltr"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {createForm.formState.errors.imageUrl && (
                      <p className="text-red-500 text-sm mt-1">{createForm.formState.errors.imageUrl.message}</p>
                    )}
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="light-outline"
                    onClick={() => setIsCreateDialogOpen(false)}
                  >
                    إلغاء
                  </Button>
                  <Button type="submit" disabled={createEvent.isPending}>
                    {createEvent.isPending ? (
                      <>
                        <Spinner className="w-4 h-4 ml-2" />
                        جارٍ الإنشاء...
                      </>
                    ) : (
                      "إنشاء الفعالية"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Edit Event Dialog */}
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-neutral-200">
              <DialogHeader>
                <DialogTitle className="text-neutral-800">تعديل الفعالية</DialogTitle>
              </DialogHeader>
              <form onSubmit={editForm.handleSubmit(handleUpdateSubmit)}>
                <div className="space-y-4 py-4">
                  <div>
                    <label htmlFor="edit-name" className="block text-sm font-medium mb-2 text-neutral-700">
                      اسم الفعالية *
                    </label>
                    <Input
                      id="edit-name"
                      {...editForm.register("name")}
                      placeholder="أدخل اسم الفعالية"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {editForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="edit-description" className="block text-sm font-medium mb-2 text-neutral-700">
                      الوصف
                    </label>
                    <Textarea
                      id="edit-description"
                      {...editForm.register("description")}
                      placeholder="أدخل وصف الفعالية"
                      rows={3}
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {editForm.formState.errors.description && (
                      <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="edit-city" className="block text-sm font-medium mb-2 text-neutral-700">
                        المدينة *
                      </label>
                      <Input
                        id="edit-city"
                        {...editForm.register("city")}
                        placeholder="الرياض، جدة، الدمام..."
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {editForm.formState.errors.city && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="edit-category" className="block text-sm font-medium mb-2 text-neutral-700">
                        الفئة
                      </label>
                      <Input
                        id="edit-category"
                        {...editForm.register("category")}
                        placeholder="ثقافي، رياضي، تقني..."
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {editForm.formState.errors.category && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.category.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="edit-latitude" className="block text-sm font-medium mb-2 text-neutral-700">
                        خط العرض *
                      </label>
                      <Input
                        id="edit-latitude"
                        {...editForm.register("latitude")}
                        placeholder="24.7136"
                        dir="ltr"
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {editForm.formState.errors.latitude && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.latitude.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="edit-longitude" className="block text-sm font-medium mb-2 text-neutral-700">
                        خط الطول *
                      </label>
                      <Input
                        id="edit-longitude"
                        {...editForm.register("longitude")}
                        placeholder="46.6753"
                        dir="ltr"
                        className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                      />
                      {editForm.formState.errors.longitude && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.longitude.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="edit-registration" className="block text-sm font-medium mb-2 text-neutral-700">
                      رابط التسجيل *
                    </label>
                    <Input
                      id="edit-registration"
                      {...editForm.register("registrationLink")}
                      placeholder="https://example.com/register"
                      dir="ltr"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {editForm.formState.errors.registrationLink && (
                      <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.registrationLink.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="edit-start-date" className="block text-sm font-medium mb-2 text-neutral-700">
                        تاريخ البداية *
                      </label>
                      <Input
                        id="edit-start-date"
                        type="date"
                        {...editForm.register("startDate")}
                        className="bg-white border-neutral-300 text-neutral-900"
                      />
                      {editForm.formState.errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.startDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="edit-end-date" className="block text-sm font-medium mb-2 text-neutral-700">
                        تاريخ النهاية *
                      </label>
                      <Input
                        id="edit-end-date"
                        type="date"
                        {...editForm.register("endDate")}
                        className="bg-white border-neutral-300 text-neutral-900"
                      />
                      {editForm.formState.errors.endDate && (
                        <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.endDate.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="edit-image" className="block text-sm font-medium mb-2 text-neutral-700">
                      رابط الصورة
                    </label>
                    <Input
                      id="edit-image"
                      {...editForm.register("imageUrl")}
                      placeholder="https://example.com/image.jpg"
                      dir="ltr"
                      className="bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                    />
                    {editForm.formState.errors.imageUrl && (
                      <p className="text-red-500 text-sm mt-1">{editForm.formState.errors.imageUrl.message}</p>
                    )}
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="light-outline"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    إلغاء
                  </Button>
                  <Button type="submit" disabled={updateEvent.isPending}>
                    {updateEvent.isPending ? (
                      <>
                        <Spinner className="w-4 h-4 ml-2" />
                        جارٍ التحديث...
                      </>
                    ) : (
                      "حفظ التعديلات"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Delete Confirmation Dialog */}
          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogContent className="bg-white border-neutral-200">
              <AlertDialogTitle className="-mt-1.5 mb-1 text-lg font-medium text-neutral-800">
                هل أنت متأكد؟
              </AlertDialogTitle>
              <p className="text-neutral-600 mb-6">
                سيتم حذف الفعالية &quot;{selectedEvent?.name}&quot; بشكل نهائي ولا يمكن
                التراجع عن هذا الإجراء.
              </p>
              <div className="flex justify-end gap-4">
                <AlertDialogClose className="flex h-10 items-center justify-center rounded border border-neutral-300 px-3.5 text-base font-medium text-neutral-700 select-none focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 hover:bg-neutral-50">
                  إلغاء
                </AlertDialogClose>
                <button
                  type="button"
                  onClick={handleDeleteConfirm}
                  disabled={deleteEvent.isPending}
                  className="flex h-10 items-center justify-center rounded border bg-red-500 hover:bg-red-600 px-3.5 text-base font-medium text-white select-none focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleteEvent.isPending ? (
                    <>
                      <Spinner className="w-4 h-4 ml-2" />
                      جارٍ الحذف...
                    </>
                  ) : (
                    "حذف"
                  )}
                </button>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </div>
    </div>
  );
}

export default function ManageEventsPage() {
  return <ManageEventsContent />;
}
