"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";

import { cn } from "@/lib/utils";

const NativeSelect = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative inline-flex" data-slot="native-select-wrapper">
      <select
        ref={ref}
        data-slot="native-select"
        className={cn(
          "h-10 w-full appearance-none rounded border border-neutral-700 bg-neutral-800 py-2 pr-10 pl-3 text-sm text-neutral-100 outline-none transition-colors",
          "hover:border-neutral-600",
          "focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-error-500 aria-invalid:focus:ring-error-500/20",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <LuChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-400"
        aria-hidden="true"
      />
    </div>
  );
});
NativeSelect.displayName = "NativeSelect";

const NativeSelectOption = React.forwardRef<
  HTMLOptionElement,
  React.ComponentProps<"option">
>(({ className, ...props }, ref) => {
  return (
    <option
      ref={ref}
      data-slot="native-select-option"
      className={cn("bg-neutral-800 text-neutral-100", className)}
      {...props}
    />
  );
});
NativeSelectOption.displayName = "NativeSelectOption";

const NativeSelectOptGroup = React.forwardRef<
  HTMLOptGroupElement,
  React.ComponentProps<"optgroup">
>(({ className, ...props }, ref) => {
  return (
    <optgroup
      ref={ref}
      data-slot="native-select-optgroup"
      className={cn("bg-neutral-800 font-semibold text-neutral-300", className)}
      {...props}
    />
  );
});
NativeSelectOptGroup.displayName = "NativeSelectOptGroup";

export { NativeSelect, NativeSelectOption, NativeSelectOptGroup };
