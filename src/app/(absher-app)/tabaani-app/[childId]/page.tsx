"use client";

import { useParams, useRouter } from "next/navigation";
import { useChildLocation } from "@/api/queries";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import dynamic from "next/dynamic";
import { LuChevronRight } from "react-icons/lu";
import Breadcrumb from "../_components/Breadcrumb";

const MapComponent = dynamic(() => import("../_components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px] bg-neutral-100 rounded-lg">
      <Spinner className="w-8 h-8" />
    </div>
  ),
});

export default function ChildLocationPage() {
  const params = useParams();
  const router = useRouter();
  const childId = params.childId as string;

  const { data: location, isLoading, error } = useChildLocation(childId);

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 w-full">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "خدمة تابعني", href: "/tabaani-app" },
              { label: location?.childName || "الموقع" },
            ]}
          />

          <div className="mb-6">
            {location && (
              <div>
                <h2 className="text-3xl mb-2">
                  موقع <span className="text-primary-500">{location.childName}</span>
                </h2>
                <p className="text-lg text-neutral-600">
                  آخر تحديث: {new Date(location.timestamp).toLocaleString("ar-SA")}
                </p>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-[600px] bg-neutral-100 rounded-lg">
              <Spinner className="w-8 h-8" />
            </div>
          ) : error ? (
            <div className="text-center p-12 bg-neutral-100 rounded-lg">
              <p className="text-red-500 mb-4">حدث خطأ أثناء تحميل الموقع</p>
              <Button onClick={() => router.back()}>العودة</Button>
            </div>
          ) : location ? (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-neutral-600 mb-1">الاسم</h3>
                    <p className="text-lg font-semibold">{location.childName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-neutral-600 mb-1">العنوان</h3>
                    <p className="text-lg font-semibold">{location.address}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-neutral-600 mb-1">خط العرض</h3>
                    <p className="text-lg font-mono">{location.latitude.toFixed(6)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-neutral-600 mb-1">خط الطول</h3>
                    <p className="text-lg font-mono">{location.longitude.toFixed(6)}</p>
                  </div>
                </div>
              </div>

              <MapComponent
                latitude={location.latitude}
                longitude={location.longitude}
                childName={location.childName}
              />
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
