"use client";

import type * as React from "react";
import { Meter as MeterPrimitive } from "@base-ui-components/react/meter";

import { cn } from "@/lib/utils";

function Meter({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Root>) {
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn(
        "box-border grid w-96 max-w-[calc(100vw-8rem)] grid-cols-2 gap-y-2",
        className,
      )}
      {...props}
    />
  );
}

function MeterLabel({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Label>) {
  return (
    <MeterPrimitive.Label
      data-slot="meter-label"
      className={cn("text-sm font-medium text-neutral-100", className)}
      {...props}
    />
  );
}

function MeterValue({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Value>) {
  return (
    <MeterPrimitive.Value
      data-slot="meter-value"
      className={cn(
        "col-start-2 m-0 text-right text-sm leading-5 text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function MeterTrack({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Track>) {
  return (
    <MeterPrimitive.Track
      data-slot="meter-track"
      className={cn(
        "col-span-2 block h-2 w-full overflow-hidden rounded-full bg-neutral-800 shadow-[inset_0_0_0_1px] shadow-neutral-700",
        className,
      )}
      {...props}
    />
  );
}

function MeterIndicator({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Indicator>) {
  return (
    <MeterPrimitive.Indicator
      data-slot="meter-indicator"
      className={cn(
        "block h-full bg-primary-500 transition-all duration-500 focus-visible:outline  focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator };
