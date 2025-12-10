"use client";

import { useChildren } from "@/api/queries";
import { Spinner } from "@/components/ui/spinner";
import Breadcrumb from "./_components/Breadcrumb";
import ChildCard from "./_components/ChildCard";

export default function TabaaniApp() {
  const parentNationalId = "1001001001";
  const parentName = "ولي الأمر";

  const { data: children, isLoading, error } = useChildren(parentNationalId, true);

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 w-full">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "خدمة تابعني" },
            ]}
          />

          <h2 className="text-3xl max-w-2xl">
            مرحبا بك <span className="text-primary-500">{parentName}</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            قائمة أبنائك القُصر
          </p>

          {isLoading ? (
            <div className="mt-12 flex justify-center">
              <Spinner className="w-8 h-8" />
            </div>
          ) : error ? (
            <div className="mt-12 text-center">
              <p className="text-red-500">حدث خطأ أثناء تحميل البيانات</p>
            </div>
          ) : children && children.length > 0 ? (
            <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {children.map((child) => (
                <ChildCard key={child.id} child={child} />
              ))}
            </section>
          ) : (
            <div className="mt-12 text-center">
              <p className="text-neutral-600">لا يوجد أبناء قُصر مسجلين</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
