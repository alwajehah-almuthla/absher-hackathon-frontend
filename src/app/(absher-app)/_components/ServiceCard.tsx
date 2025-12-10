import type React from "react";
import Link from "next/link";

const ServiceCard = ({
  title,
  description,
  link,
  ...props
}: {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  link?: string;
}) => {
  const content = (
    <>
      <props.logo className="w-12 h-12  text-primary-500" />
      <section className="mt-2">
        <h3 className="text-2xl">{title}</h3>
      </section>
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg p-6 min-w-[200px] flex flex-col"
      >
        {content}
      </Link>
    );
  }

  return <section className="bg-white rounded-xl shadow-md p-6 min-w-[200px] flex flex-col">{content}</section>;
};

export default ServiceCard;
