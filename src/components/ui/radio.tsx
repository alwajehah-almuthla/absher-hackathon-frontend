"use client";

import type * as React from "react";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn(
        "flex flex-col items-start gap-1 text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function RadioRoot({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-root"
      className={cn(
        "flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-600 data-checked:bg-neutral-100 data-unchecked:border data-unchecked:border-neutral-700 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function RadioIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Indicator>) {
  return (
    <RadioPrimitive.Indicator
      data-slot="radio-indicator"
      className={cn(
        "flex before:size-2 before:rounded-full before:bg-neutral-800 data-unchecked:hidden",
        className,
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioRoot, RadioIndicator };
