"use client";

import * as React from "react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible";
import { LuChevronLeft } from "react-icons/lu";

import { cn } from "@/lib/utils";

function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn(
        "flex min-h-36 w-56 flex-col justify-center text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "group flex items-center gap-2 rounded-sm bg-neutral-800 border border-neutral-700 px-2 py-1 text-sm font-medium text-neutral-100 hover:bg-neutral-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 active:bg-neutral-800/80",
        className,
      )}
      {...props}
    >
      <LuChevronLeft className="size-3 transition-all ease-out group-data-[panel-open]:rotate-90" />
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

function CollapsiblePanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-panel"
      className={cn(
        "flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mt-1 flex flex-col gap-2 rounded-sm bg-neutral-800 border border-neutral-700 py-2 px-3",
          className,
        )}
      >
        {children}
      </div>
    </CollapsiblePrimitive.Panel>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
