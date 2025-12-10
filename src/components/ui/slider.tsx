"use client";

import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Slider({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("text-neutral-100", className)}
      {...props}
    />
  );
}

function SliderValue({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Value>) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn("text-sm text-neutral-100", className)}
      {...props}
    />
  );
}

function SliderControl({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Control>) {
  return (
    <SliderPrimitive.Control
      data-slot="slider-control"
      className={cn(
        "flex w-56 touch-none items-center py-3 select-none",
        className,
      )}
      {...props}
    />
  );
}

function SliderTrack({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Track>) {
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      className={cn(
        "h-1 w-full rounded bg-neutral-800 border border-neutral-700 select-none",
        className,
      )}
      {...props}
    />
  );
}

function SliderIndicator({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Indicator>) {
  return (
    <SliderPrimitive.Indicator
      data-slot="slider-indicator"
      className={cn("rounded bg-neutral-100 select-none", className)}
      {...props}
    />
  );
}

function SliderThumb({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Thumb>) {
  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      className={cn(
        "size-4 rounded-full bg-neutral-100 border border-neutral-700 select-none has-focus-visible:outline has-focus-visible:outline-primary-600 has-focus-visible:outline-offset-1",
        className,
      )}
      {...props}
    />
  );
}

export {
  Slider,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
};
