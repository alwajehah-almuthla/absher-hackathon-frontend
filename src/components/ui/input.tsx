"use client";

import { Input as InputPrimitive } from "@base-ui-components/react/input";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  ...props
}: React.ComponentProps<typeof InputPrimitive>) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "h-10 w-full rounded border border-neutral-700 bg-neutral-800 px-3.5 text-base text-neutral-100 placeholder:text-neutral-400",
        "focus:outline  focus:-outline-offset-1 focus:outline-primary-600",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-invalid:border-error-700 data-invalid:focus:outline-error-800",
        "data-filled:border-neutral-600",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
