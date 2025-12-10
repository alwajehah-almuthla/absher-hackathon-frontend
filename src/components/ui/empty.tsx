"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyProps extends React.ComponentProps<"div"> {}

function Empty({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-8 text-center",
        className,
      )}
      {...props}
    />
  );
}

interface EmptyHeaderProps extends React.ComponentProps<"div"> {}

function EmptyHeader({ className, ...props }: EmptyHeaderProps) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    />
  );
}

interface EmptyMediaProps extends React.ComponentProps<"div"> {
  variant?: "default" | "icon";
}

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-media"
      className={cn(
        "flex items-center justify-center",
        variant === "icon" &&
          "rounded-full bg-neutral-700 p-4 text-neutral-100",
        variant === "default" && "text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}

interface EmptyTitleProps extends React.ComponentProps<"h3"> {}

function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <h3
      data-slot="empty-title"
      className={cn("text-lg font-semibold text-neutral-100", className)}
      {...props}
    />
  );
}

interface EmptyDescriptionProps extends React.ComponentProps<"p"> {}

function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
  return (
    <p
      data-slot="empty-description"
      className={cn("text-sm text-neutral-300", className)}
      {...props}
    />
  );
}

interface EmptyContentProps extends React.ComponentProps<"div"> {}

function EmptyContent({ className, ...props }: EmptyContentProps) {
  return (
    <div
      data-slot="empty-content"
      className={cn("flex flex-col items-center gap-2", className)}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
};
