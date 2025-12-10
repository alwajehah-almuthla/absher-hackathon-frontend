"use client";

import type * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "grid w-96 max-w-[calc(100vw-8rem)] grid-cols-2 gap-y-2 text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function ProgressLabel({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Label>) {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={cn("text-sm font-medium text-neutral-100", className)}
      {...props}
    />
  );
}

function ProgressValue({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Value>) {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={cn(
        "col-start-2 text-right text-sm text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function ProgressTrack({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Track>) {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn(
        "col-span-full h-2 overflow-hidden rounded border border-neutral-700 bg-neutral-800 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Indicator>) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "block h-full bg-primary-500 transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

export {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressTrack,
  ProgressIndicator,
};
