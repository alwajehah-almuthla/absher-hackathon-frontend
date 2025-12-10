"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui-components/react/combobox";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Combobox<T>({ ...props }: ComboboxPrimitive.Root.Props<T>) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
}

// TODO : FOR THE MULTIPLE SELECT IF WE DECLARE THE ROOT COMPONENT HERE IT WILL REMOVE THE ABILITY TO CHANGE IT LATER TRY TO FIX THIS ISSUE IN THE FUTURE

function ComboboxValue({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Value>) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Input>) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50 data-readonly:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-sm text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Icon>) {
  return (
    <ComboboxPrimitive.Icon
      data-slot="combobox-icon"
      className={cn(
        "size-4 transition-transform data-popup-open:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Icon>
  );
}

function ComboboxClear({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Clear>) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-sm text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chips>) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn("flex flex-wrap gap-1", className)}
      {...props}
    />
  );
}

function ComboboxChip({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chip>) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "inline-flex items-center gap-1 rounded-sm bg-neutral-700 px-2 py-1 text-xs text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxChipRemove({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ChipRemove>) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn(
        "inline-flex items-center justify-center rounded-sm text-neutral-400 hover:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-600",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxPortal({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Portal>) {
  return <ComboboxPrimitive.Portal data-slot="combobox-portal" {...props} />;
}

function ComboboxBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Backdrop>) {
  return (
    <ComboboxPrimitive.Backdrop
      data-slot="combobox-backdrop"
      className={cn(
        "fixed inset-0 z-40 bg-black/50 data-starting-style:opacity-0 data-ending-style:opacity-0 data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxPositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Positioner>) {
  return (
    <ComboboxPrimitive.Positioner
      data-slot="combobox-positioner"
      className={cn("outline-none", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function ComboboxPopup({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Popup>) {
  return (
    <ComboboxPrimitive.Popup
      data-slot="combobox-popup"
      className={cn(
        "z-50 w-(--anchor-width) max-h-[min(var(--available-height),23rem)] max-w-(--available-width) overflow-y-auto overscroll-contain rounded-md border border-neutral-700 bg-neutral-800 py-2 text-neutral-100 shadow-lg outline-none data-starting-style:opacity-0 data-ending-style:opacity-0 data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxArrow({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Arrow>) {
  return (
    <ComboboxPrimitive.Arrow
      data-slot="combobox-arrow"
      className={cn("fill-neutral-800", className)}
      {...props}
    />
  );
}

function ComboboxStatus({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Status>) {
  return (
    <ComboboxPrimitive.Status
      data-slot="combobox-status"
      className={cn("px-4 py-2 text-sm text-neutral-500", className)}
      {...props}
    />
  );
}

function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "px-4 py-2 text-sm leading-4 text-neutral-500 empty:m-0 empty:p-0",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.List>) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn("scroll-py-2", className)}
      {...props}
    />
  );
}

function ComboboxRow({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Row>) {
  return (
    <ComboboxPrimitive.Row
      data-slot="combobox-row"
      className={cn("contents", className)}
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Item>) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative grid cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none transition-colors data-highlighted:bg-neutral-700 data-highlighted:text-neutral-50",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>) {
  return (
    <ComboboxPrimitive.ItemIndicator
      data-slot="combobox-item-indicator"
      className={cn("col-start-1 flex items-center justify-center", className)}
      {...props}
    />
  );
}

function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Separator>) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("mx-4 my-1.5 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function ComboboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Group>) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn(
        "px-4 py-2 text-xs font-semibold text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxCollection({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Collection>) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

export {
  Combobox,
  ComboboxValue,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxIcon,
  ComboboxClear,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxPortal,
  ComboboxBackdrop,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxArrow,
  ComboboxStatus,
  ComboboxEmpty,
  ComboboxList,
  ComboboxRow,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxCollection,
};
