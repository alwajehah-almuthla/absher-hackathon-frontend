import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-primary-500 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-800 font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <LuChevronLeft className="text-neutral-400" size={16} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
