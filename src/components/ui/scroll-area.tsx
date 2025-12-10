"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";
import type * as React from "react";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("box-border", className)}
      {...props}
    />
  );
}

function ScrollAreaViewport({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>) {
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className={cn(
        "h-full overscroll-contain   focus-visible:outline focus-visible:outline-primary-600",
        className,
      )}
      suppressHydrationWarning
      {...props}
    />
  );
}

function ScrollAreaContent({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Content>) {
  return (
    <ScrollAreaPrimitive.Content
      data-slot="scroll-area-content"
      className={cn("flex flex-col gap-4 py-3 pr-6 pl-4", className)}
      {...props}
    />
  );
}

function ScrollAreaScrollbar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "m-2 flex w-1 justify-center rounded bg-neutral-700 opacity-0 transition-opacity delay-300 pointer-events-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-75 data-hovering:pointer-events-auto data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-75 data-scrolling:pointer-events-auto",
        orientation === "horizontal" && "h-1 w-auto",
        className,
      )}
      suppressHydrationWarning
      {...props}
    />
  );
}

function ScrollAreaThumb({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Thumb>) {
  return (
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      className={cn("w-full rounded bg-neutral-100", className)}
      {...props}
    />
  );
}

function ScrollAreaCorner({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Corner>) {
  return (
    <ScrollAreaPrimitive.Corner
      data-slot="scroll-area-corner"
      className={cn("bg-neutral-700", className)}
      {...props}
    />
  );
}

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
