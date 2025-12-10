"use client";

import type * as React from "react";
import { Toolbar as ToolbarPrimitive } from "@base-ui-components/react/toolbar";

import { cn } from "@/lib/utils";

function Toolbar({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={cn(
        "flex items-center gap-px rounded-md border border-neutral-700 bg-neutral-800 p-0.5",
        className,
      )}
      {...props}
    />
  );
}

function ToolbarButton({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Button>) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      className={cn(
        "flex h-8 items-center justify-center rounded-sm px-3 font-inherit text-sm font-medium text-neutral-100 select-none hover:bg-neutral-700 focus-visible:bg-none focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 active:bg-neutral-600 data-pressed:bg-neutral-700 data-pressed:text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function ToolbarGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Group>) {
  return (
    <ToolbarPrimitive.Group
      data-slot="toolbar-group"
      className={cn("flex gap-1", className)}
      {...props}
    />
  );
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn("m-1 h-4 w-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link>) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn(
        "mr-3.5 ml-auto flex-none self-center text-sm text-neutral-100 no-underline hover:text-primary-400 focus-visible:rounded-sm focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

function ToolbarInput({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Input>) {
  return (
    <ToolbarPrimitive.Input
      data-slot="toolbar-input"
      className={cn(
        "h-8 rounded-sm border border-neutral-700 bg-neutral-800 px-3 text-sm text-neutral-100 placeholder:text-neutral-500 hover:bg-neutral-700 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600",
        className,
      )}
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarInput,
};
