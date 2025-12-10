"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "@base-ui-components/react/avatar";

import { cn } from "@/lib/utils";

function AvatarRoot({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar-root"
      className={cn(
        "inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-neutral-700 align-middle text-base font-medium text-neutral-100 select-none border border-neutral-600",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center text-base font-medium text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

export { AvatarRoot, AvatarImage, AvatarFallback };
