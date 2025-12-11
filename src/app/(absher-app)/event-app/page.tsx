"use client";

import { useEvents, useNearbyTourismPlaces } from "@/api/queries";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useState } from "react";
import { LuLink } from "react-icons/lu";
import Breadcrumb from "../tabaani-app/_components/Breadcrumb";
import TourismPlaceCard from "./_components/TourismPlaceCard";

export default function EventApp() {
  const { data: events, isLoading: eventsLoading, error: eventsError } = useEvents();

  // Default location (Riyadh center)
  const [userLocation] = useState({ lat: 24.7136, lng: 46.6753 });

  const {
    data: nearbyPlaces,
    isLoading: placesLoading,
    error: placesError,
  } = useNearbyTourismPlaces({ lat: userLocation.lat, lng: userLocation.lng, radius: 50 }, true);

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
              { label: "الفعاليات والمؤتمرات" },
            ]}
          />

          <h2 className="text-3xl max-w-2xl mb-2">
            <span className="text-primary-500">الفعاليات والمؤتمرات</span> القادمة
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            تصفح الفعاليات القادمة وسجل حضورك
          </p>

          {/* Events Table */}
          {eventsLoading ? (
            <div className="flex justify-center py-12">
              <Spinner className="w-8 h-8" />
            </div>
          ) : eventsError ? (
            <div className="text-center py-12">
              <p className="text-red-500">حدث خطأ أثناء تحميل الفعاليات</p>
            </div>
          ) : events && events.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary-500">
                    <TableHead className="text-right text-primary-50">اسم الفعالية</TableHead>
                    <TableHead className="text-right text-primary-50">المدينة</TableHead>
                    <TableHead className="text-right text-primary-50">تاريخ البداية</TableHead>
                    <TableHead className="text-right text-primary-50">تاريخ النهاية</TableHead>
                    <TableHead className="text-right text-primary-50">التسجيل</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id} className="hover:bg-neutral-50">
                      <TableCell className="font-medium text-neutral-800">
                        {event.name}
                      </TableCell>
                      <TableCell className="text-neutral-700">{event.city}</TableCell>
                      <TableCell className="text-neutral-700">
                        {formatDate(event.startDate)}
                      </TableCell>
                      <TableCell className="text-neutral-700">
                        {formatDate(event.endDate)}
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`/event-app/register?eventId=${event.id}`}
                          className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          <span>سجل الآن</span>
                          <LuLink size={16} />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-lg mb-16">
              <p className="text-neutral-600">لا توجد فعاليات قادمة حالياً</p>
            </div>
          )}

          {/* Nearby Tourism Places */}
          <div className="mt-16">
            <h3 className="text-2xl mb-2">
              <span className="text-primary-500">الأماكن السياحية</span> القريبة
            </h3>
            <p className="text-neutral-600 mb-8">
              اكتشف الأماكن السياحية القريبة منك
            </p>

            {placesLoading ? (
              <div className="flex justify-center py-12">
                <Spinner className="w-8 h-8" />
              </div>
            ) : placesError ? (
              <div className="text-center py-12">
                <p className="text-red-500">حدث خطأ أثناء تحميل الأماكن السياحية</p>
              </div>
            ) : nearbyPlaces && nearbyPlaces.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {nearbyPlaces.slice(0, 6).map((place) => (
                    <TourismPlaceCard key={place.id} place={place} />
                  ))}
                </div>

                <div className="flex justify-center">
                  <Link href="/event-app/explore">
                    <Button size="lg" className="px-8">
                      استكشف جميع الأماكن السياحية
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-lg">
                <p className="text-neutral-600">لا توجد أماكن سياحية قريبة</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
