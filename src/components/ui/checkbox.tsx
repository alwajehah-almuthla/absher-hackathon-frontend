"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react";

import { cn } from "@/lib/utils";
import { LuCheck } from "react-icons/lu";

function CheckboxRoot({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox-root"
      className={cn(
        "flex size-5 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-800 text-neutral-100 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-primary-600 data-checked:border-primary-500 data-checked:bg-primary-600 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function CheckboxIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn("flex text-neutral-100 data-unchecked:hidden", className)}
      {...props}
    >
      {children || <LuCheck className="size-3" />}
    </CheckboxPrimitive.Indicator>
  );
}

export { CheckboxRoot, CheckboxIndicator };
