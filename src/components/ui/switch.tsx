"use client";

import type * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative flex h-6 w-10 rounded-full bg-linear-to-r from-neutral-700 from-35% to-neutral-600  data-checked:from-primary-500 data-checked:to-primary-500 to-65% bg-size-[6.5rem_100%] bg-position-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-primary-500 outline -outline-offset-1 outline-neutral-400/50 transition-[background-position,box-shadow] duration-125 ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-primary-500 focus-visible:before:inset-0 focus-visible:before:outline active:bg-primary-400 data-checked:bg-position-[0%_0%] data-checked:active:bg-primary-400 ",
        className,
      )}
      {...props}
    />
  );
}

function SwitchThumb({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Thumb>) {
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-neutral-800  transition-transform duration-150 data-checked:translate-x-4 ",
        className,
      )}
      {...props}
    />
  );
}

export { Switch, SwitchThumb };
