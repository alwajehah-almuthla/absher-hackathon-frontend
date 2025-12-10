"use client";

import type * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";

import { cn } from "@/lib/utils";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-10 min-w-36 items-center justify-between gap-3 rounded border border-neutral-700 bg-neutral-800 pr-3 pl-3.5 text-base text-neutral-100 select-none hover:bg-neutral-800/80 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 data-popup-open:bg-neutral-800/80 cursor-default transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("text-neutral-100", className)}
      {...props}
    />
  );
}

function SelectIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) {
  return (
    <SelectPrimitive.Icon
      data-slot="select-icon"
      className={cn("flex text-neutral-300", className)}
      {...props}
    >
      {children || <LuChevronsUpDown className="size-3" />}
    </SelectPrimitive.Icon>
  );
}

function SelectPortal({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Portal>) {
  return <SelectPrimitive.Portal data-slot="select-portal" {...props} />;
}

function SelectBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Backdrop>) {
  return (
    <SelectPrimitive.Backdrop
      data-slot="select-backdrop"
      className={cn(
        "fixed inset-0 z-40 bg-black/50 data-starting-style:opacity-0 data-ending-style:opacity-0 transition-opacity",
        className,
      )}
      {...props}
    />
  );
}

function SelectPositioner({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Positioner>) {
  return (
    <SelectPrimitive.Positioner
      data-slot="select-positioner"
      className={cn("outline-none select-none z-50", className)}
      sideOffset={8}
      {...props}
    />
  );
}

function SelectPopup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup>) {
  return (
    <SelectPrimitive.Popup
      data-slot="select-popup"
      className={cn(
        "group origin-(--transform-origin) bg-neutral-800 rounded border border-neutral-700 text-neutral-100 shadow-lg transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-side=none:data-ending-style:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 data-side=none:data-starting-style:scale-100 data-side=none:data-starting-style:opacity-100 data-side=none:data-starting-style:transition-none",
        className,
      )}
      {...props}
    />
  );
}

function SelectScrollUpArrow({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      className={cn(
        "top-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded bg-neutral-800 text-center text-xs before:absolute data-[side=none]:before:-top-full before:left-0 before:h-full before:w-full before:content-['']",
        className,
      )}
      {...props}
    />
  );
}

function SelectScrollDownArrow({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={cn(
        "bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded bg-neutral-800 text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-bottom-full",
        className,
      )}
      {...props}
    />
  );
}

function SelectList({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.List>) {
  return (
    <SelectPrimitive.List
      data-slot="select-list"
      className={cn(
        "relative py-1 scroll-py-6 overflow-y-auto max-h-(--available-height)",
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "grid min-w-(--anchor-width) cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-highlighted:relative data-highlighted:z-0 data-[highlighted:text-neutral-50 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-primary-600 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem] transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function SelectItemText({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemText>) {
  return (
    <SelectPrimitive.ItemText
      data-slot="select-item-text"
      className={cn("col-start-2", className)}
      {...props}
    />
  );
}

function SelectItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ItemIndicator>) {
  return (
    <SelectPrimitive.ItemIndicator
      data-slot="select-item-indicator"
      className={cn("col-start-1", className)}
      {...props}
    >
      {children || <LuCheck className="size-3" />}
    </SelectPrimitive.ItemIndicator>
  );
}

function SelectArrow({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Arrow>) {
  return (
    <SelectPrimitive.Arrow
      data-slot="select-arrow"
      className={cn("flex", className)}
      {...props}
    />
  );
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cn(
        "py-1.5 pr-2 pl-8 text-xs font-semibold text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectPositioner,
  SelectPopup,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
  SelectList,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectArrow,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
};
