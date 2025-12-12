"use client";

import type React from "react";
import {
  LuPresentation,
  LuMonitor,
  LuServer,
  LuFileCode,
  LuGlobe,
  LuLink,
  LuCalendarCog,
} from "react-icons/lu";

type Deliverable = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link: string;
  highlight?: boolean;
  internal?: boolean;
};

const deliverables: Deliverable[] = [
  {
    icon: LuPresentation,
    title: "العرض التقديمي",
    description: "عرض تقديمي شامل لمشروع الهاكاثون",
    link: "https://docs.google.com/presentation/d/1Qh_5btTbaHgRfi9y34wHyi4EwI8gcX7Bxnp9DEn7tRs/edit?usp=sharing",
  },
  {
    icon: LuMonitor,
    title: "مستودع الواجهة الأمامية",
    description: "الكود المصدري للواجهة الأمامية على GitHub",
    link: "https://github.com/alwajehah-almuthla/absher-hackathon-frontend",
  },
  {
    icon: LuServer,
    title: "مستودع الواجهة الخلفية",
    description: "الكود المصدري للواجهة الخلفية على GitHub",
    link: "https://github.com/alwajehah-almuthla/absher-hackathon-backend",
  },
  {
    icon: LuFileCode,
    title: "دليل استخدام API",
    description: "شرح مفصل لطريقة استخدام الـ API",
    link: "https://absher-hackathon-api.alwjhah-almothla.com/reference",
  },
  {
    icon: LuCalendarCog,
    title: "إدارة الفعاليات",
    description: "صفحة إدارة الفعاليات - إضافة وتعديل وحذف",
    link: "/event-app/manage",
    internal: true,
  },
  {
    icon: LuGlobe,
    title: "تطبيق الواجهة الأمامية",
    description: "التطبيق المباشر للواجهة الأمامية",
    link: "https://absher.alwjhah-almothla.com",
    highlight: true,
  },
];

const DeliverableCard = ({
  icon: Icon,
  title,
  description,
  link,
  highlight,
  internal,
}: Deliverable) => {
  return (
    <a
      href={link}
      {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={`bg-white rounded-xl shadow-md transition-all hover:shadow-xl p-6 min-w-[280px] flex flex-col group ${
        highlight
          ? "ring-2 ring-primary-500 hover:ring-4 hover:ring-primary-400 transform hover:scale-105"
          : ""
      }`}
    >
      <Icon className="w-12 h-12 mb-4 text-primary-500" />
      <section className="flex-1">
        <h3 className="text-2xl mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600">{description}</p>
      </section>
      <div className="mt-4 flex items-center gap-2 text-primary-500">
        <span>{internal ? "الانتقال للصفحة" : "فتح الرابط"}</span>
        <LuLink className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

export default function HackathonLinksPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/** biome-ignore lint/performance/noImgElement: <we don't need optimization here> */}
      <img
        src="/grid.svg"
        alt="Absher Logo"
        className="w-full absolute inset-0 -z-10 opacity-40"
      />
      <div className="w-full">
        <section className="mx-auto max-w-7xl px-6 py-20 w-full">
          <h1 className="text-4xl max-w-3xl font-bold">
            مخرجات <span className="text-primary-500">هاكاثون أبشر 2025</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
            جميع روابط المشروع والموارد المتعلقة بالهاكاثون
          </p>

          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable) => (
              <DeliverableCard key={deliverable.title} {...deliverable} />
            ))}
          </section>

          <div className="mt-16 p-6 bg-white border-r-4 border-primary-500 rounded-lg shadow-sm">
            <p className="text-base text-neutral-700">
              <span className="font-semibold text-neutral-900">تنبيه: </span>
              هذه المشاريع تم تطويرها لأغراض الهاكاثون وليست تابعة رسمياً لأبشر أو
              وزارة الداخلية
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
