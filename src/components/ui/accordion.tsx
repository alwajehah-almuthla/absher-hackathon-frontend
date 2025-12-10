"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui-components/react";
import { LuChevronLeft } from "react-icons/lu";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "flex w-96 max-w-[calc(100vw-8rem)] flex-col justify-center text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-neutral-700", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group relative flex w-full items-baseline justify-between gap-4 bg-neutral-800 py-2 pr-1 pl-3 text-left font-medium hover:bg-neutral-800/80 focus-visible:z-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 data-[panel-open]:bg-neutral-800/80",
          className,
        )}
        {...props}
      >
        {children}
        <LuChevronLeft className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:-rotate-90" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-neutral-100 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0"
      {...props}
    >
      <div className={cn("p-3", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
