"use client";

import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-20 w-full rounded border border-neutral-700 bg-neutral-800 px-3.5 py-2 text-base text-neutral-100 placeholder:text-neutral-400",
        "focus:outline focus:-outline-offset-1 focus:outline-primary-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-y",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
