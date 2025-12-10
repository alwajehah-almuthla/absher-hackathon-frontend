"use client";

import type * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";

import { cn } from "@/lib/utils";

function Toggle({
  className,
  ...props
}: React.ComponentProps<typeof TogglePrimitive>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(
        "flex size-8 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-800 text-neutral-100 select-none hover:bg-neutral-700 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 active:bg-neutral-600 data-pressed:bg-neutral-700 data-pressed:text-primary-400",
        className,
      )}
      {...props}
    />
  );
}

function ToggleGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive>) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn(
        "flex gap-px rounded-md border border-neutral-700 bg-neutral-800 p-0.5",
        className,
      )}
      {...props}
    />
  );
}

export { Toggle, ToggleGroup };
