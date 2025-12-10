"use client";

import type * as React from "react";
import { NumberField as NumberFieldPrimitive } from "@base-ui-components/react/number-field";

import { cn } from "@/lib/utils";

function NumberField({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Root>) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("flex flex-col items-start gap-1", className)}
      {...props}
    />
  );
}

function NumberFieldScrubArea({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.ScrubArea>) {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn("cursor-ew-resize select-none", className)}
      {...props}
    />
  );
}

function NumberFieldScrubAreaCursor({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.ScrubAreaCursor>) {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={cn("drop-shadow-[0_1px_1px_#0008] filter", className)}
      {...props}
    />
  );
}

function NumberFieldLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      data-slot="number-field-label"
      className={cn(
        "cursor-ew-resize text-sm font-medium text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function NumberFieldGroup({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Group>) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn("flex", className)}
      {...props}
    />
  );
}

function NumberFieldDecrement({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Decrement>) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={cn(
        "flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-neutral-700 bg-neutral-800 text-neutral-100 select-none hover:bg-neutral-700/50 active:bg-neutral-700 focus-visible:z-10 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

function NumberFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Input>) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn(
        "h-10 w-24 border-t border-b border-neutral-700 bg-neutral-800 text-center text-base text-neutral-100 tabular-nums focus:z-10 focus:outline focus:-outline-offset-1 focus:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

function NumberFieldIncrement({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Increment>) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={cn(
        "flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-neutral-700 bg-neutral-800 text-neutral-100 select-none hover:bg-neutral-700/50 active:bg-neutral-700 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldLabel,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
};
