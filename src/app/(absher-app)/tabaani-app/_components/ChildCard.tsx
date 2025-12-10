import type { Child } from "@/api/types";
import Link from "next/link";

const ChildCard = ({ child }: { child: Child }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA");
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Link
      href={`/tabaani-app/${child.id}`}
      className="bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg p-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-neutral-800">{child.name}</h3>
        <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
          {calculateAge(child.birthDate)} سنة
        </div>
      </div>

      <div className="space-y-2 text-neutral-600">
        <div className="flex justify-between items-center">
          <span className="text-sm">رقم الهوية:</span>
          <span className="font-medium">{child.nationalId}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">تاريخ الميلاد:</span>
          <span className="font-medium">{formatDate(child.birthDate)}</span>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-center gap-2 text-primary-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-medium">عرض الموقع الحالي</span>
        </div>
      </div>
    </Link>
  );
};

export default ChildCard;
