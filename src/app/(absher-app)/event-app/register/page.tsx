"use client";

import { useEvents } from "@/api/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import {
  LuCalendar,
  LuCircleCheck,
  LuMail,
  LuMapPin,
  LuPhone,
  LuUser,
} from "react-icons/lu";

function EventRegistrationContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");
  const { data: events, isLoading } = useEvents();
  const event = events?.data?.find((e) => e.id === eventId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationalId: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <Spinner className="w-12 h-12 text-purple-600" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-xl text-gray-700">الفعالية غير موجودة</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Header with unique branding */}
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
              <LuCalendar className="text-purple-600" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">منصة الفعاليات</h1>
              <p className="text-purple-100 text-sm">
                Event Management Platform
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {submitted ? (
          // Success State
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transform animate-in fade-in duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <LuCircleCheck className="text-white" size={48} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              تم التسجيل بنجاح!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              شكراً لتسجيلك في{" "}
              <span className="font-semibold text-purple-600">
                {event.name}
              </span>
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 mb-2">
                تم إرسال رسالة تأكيد إلى بريدك الإلكتروني
              </p>
              <p className="text-gray-600 text-sm">
                يرجى التحقق من صندوق الوارد للحصول على تفاصيل الحضور
              </p>
            </div>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              تسجيل شخص آخر
            </Button>
          </div>
        ) : (
          // Registration Form
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  معلومات الفعالية
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    {event.name}
                  </h3>
                  {event.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-xl">
                    <LuMapPin
                      className="text-purple-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">الموقع</p>
                      <p className="text-gray-600">{event.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl">
                    <LuCalendar
                      className="text-blue-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">التاريخ</p>
                      <p className="text-gray-600">
                        {new Date(event.startDate).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" - "}
                        {new Date(event.endDate).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {event.category && (
                    <div className="bg-gradient-to-r from-cyan-50 to-transparent p-4 rounded-xl">
                      <p className="font-semibold text-gray-800">الفئة</p>
                      <p className="text-gray-600">{event.category}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  نموذج التسجيل
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <LuUser className="text-purple-600" size={18} />
                      <span>الاسم الكامل</span>
                    </div>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-xl py-6 text-lg transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <LuMail className="text-blue-600" size={18} />
                      <span>البريد الإلكتروني</span>
                    </div>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl py-6 text-lg transition-colors"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <LuPhone className="text-cyan-600" size={18} />
                      <span>رقم الجوال</span>
                    </div>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-cyan-500 rounded-xl py-6 text-lg transition-colors"
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nationalId"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <LuUser className="text-purple-600" size={18} />
                      <span>رقم الهوية الوطنية</span>
                    </div>
                  </label>
                  <Input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-xl py-6 text-lg transition-colors"
                    placeholder="1xxxxxxxxx"
                    dir="ltr"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white py-7 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  تأكيد التسجيل
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            منصة الفعاليات &copy; 2025 - جميع الحقوق محفوظة
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Event Management Platform - Powered by Modern Technology
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function EventRegistrationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
          <Spinner className="w-12 h-12 text-purple-600" />
        </div>
      }
    >
      <EventRegistrationContent />
    </Suspense>
  );
}
