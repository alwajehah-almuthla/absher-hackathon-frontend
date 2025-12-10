"use client";

import type * as React from "react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui-components/react/autocomplete";

import { cn } from "@/lib/utils";

function Autocomplete<T>({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Root<T>>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" {...props} />;
}

function AutocompleteValue({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Value>) {
  return (
    <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />
  );
}

function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(
        "flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-50 data-[readonly]:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteTrigger({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-neutral-300 transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Icon>) {
  return (
    <AutocompletePrimitive.Icon
      data-slot="autocomplete-icon"
      className={cn(
        "size-4 transition-transform data-[popup-open]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
    </AutocompletePrimitive.Icon>
  );
}

function AutocompleteClear({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Clear>) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-sm text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function AutocompletePortal({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Portal>) {
  return (
    <AutocompletePrimitive.Portal data-slot="autocomplete-portal" {...props} />
  );
}

function AutocompleteBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Backdrop>) {
  return (
    <AutocompletePrimitive.Backdrop
      data-slot="autocomplete-backdrop"
      className={cn(
        "fixed inset-0 z-40 bg-black/50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

function AutocompletePositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Positioner>) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      className={cn("outline-none", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup>) {
  return (
    <AutocompletePrimitive.Popup
      data-slot="autocomplete-popup"
      className={cn(
        "z-50 w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] overflow-y-auto overscroll-contain rounded-md border border-neutral-700 bg-neutral-800 py-2 text-neutral-100 shadow-lg outline-none data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteArrow({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Arrow>) {
  return (
    <AutocompletePrimitive.Arrow
      data-slot="autocomplete-arrow"
      className={cn("fill-neutral-800", className)}
      {...props}
    />
  );
}

function AutocompleteStatus({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Status>) {
  return (
    <AutocompletePrimitive.Status
      data-slot="autocomplete-status"
      className={cn("px-4 py-2 text-sm text-neutral-500", className)}
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "px-4 py-2 text-sm leading-4 text-neutral-500 empty:m-0 empty:p-0",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn("scroll-py-2", className)}
      {...props}
    />
  );
}

function AutocompleteRow({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Row>) {
  return (
    <AutocompletePrimitive.Row
      data-slot="autocomplete-row"
      className={cn("contents", className)}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Item>) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-2 pr-8 pl-4 text-base leading-4 outline-none transition-colors data-[highlighted]:bg-neutral-700 data-[highlighted]:text-neutral-50",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Separator>) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn("mx-4 my-1.5 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(
        "px-4 py-2 text-xs font-semibold text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteCollection({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Collection>) {
  return (
    <AutocompletePrimitive.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompleteIcon,
  AutocompleteClear,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteArrow,
  AutocompleteStatus,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteRow,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
};
