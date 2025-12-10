"use client";

import { useTourismPlaces } from "@/api/queries";
import { Spinner } from "@/components/ui/spinner";
import Breadcrumb from "../../tabaani-app/_components/Breadcrumb";
import TourismPlaceCard from "../_components/TourismPlaceCard";

export default function ExploreTourismPage() {
  const { data: places, isLoading, error } = useTourismPlaces();

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 w-full">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "الفعاليات والمؤتمرات", href: "/event-app" },
              { label: "استكشف الأماكن السياحية" },
            ]}
          />

          <h2 className="text-3xl max-w-2xl mb-2">
            استكشف <span className="text-primary-500">الأماكن السياحية</span>
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            تصفح جميع الأماكن السياحية في المملكة
          </p>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner className="w-8 h-8" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">حدث خطأ أثناء تحميل الأماكن السياحية</p>
            </div>
          ) : places && places.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place) => (
                <TourismPlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-lg">
              <p className="text-neutral-600">لا توجد أماكن سياحية متاحة حالياً</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
