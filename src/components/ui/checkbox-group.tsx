"use client";

import * as React from "react";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group";

import { cn } from "@/lib/utils";

function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxGroupPrimitive>) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn(
        "flex flex-col items-start gap-1 text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

export { CheckboxGroup };
