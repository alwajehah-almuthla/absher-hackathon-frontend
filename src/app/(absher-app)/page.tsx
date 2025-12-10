"use client";

import MapIcon from "@/components/svg/MapIcon";
import TicketIcon from "@/components/svg/TicketIcon";
import type React from "react";
import ServiceCard from "./_components/ServiceCard";

type Service = {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link?: string;
};
const services: Service[] = [
  {
    title: "خدمة تابعني",
    description:
      "خدمة تمكن المستخدمين من متابعة أماكن تواجد أبنائهم القصر عبر منصة أبشر بسهولة.",
    logo: MapIcon,
    link: "/tabaani-app",
  },
  {
    title: "خدمة الفعاليات والمؤتمرات",
    description:
      "منصة لعرض الفعاليات والمؤتمرات المتعلقة بهاكاثون أبشر 2025.",
    logo: TicketIcon,
    link: "/event-app",
  }
];
export default function Home() {
  return (
    <div className="flex min-h-screen w-full ">
      {/** biome-ignore lint/performance/noImgElement: <we don't need optimization here> */}
      <img
        src="/grid.svg"
        alt="Absher Logo"
        className="w-full absolute inset-0 -z-10 opacity-40"
      />
      <div className="w-full ">
        <section className="mx-auto max-w-7xl px-6 py-20 w-full">
          <h2 className="text-3xl max-w-2xl">
            مرحبا بك في صفحة خدمتي{" "}
            <span className="text-primary-500">تابعني</span> و{" "}
            <span className="text-primary-500">الفعاليات و المؤتمرات</span>{" "}
            لـهاكاثون أبشر 2025
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            <span className="text-neutral-700">تنبيه : </span>هذه الخدمات ليست
            تابعة لـ أبشر أو وزارة الداخلية
          </p>
          <section className="mt-12 flex flex-wrap gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}
