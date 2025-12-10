"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui-components/react/context-menu";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { LuChevronRight } from "react-icons/lu";

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn(
        "flex items-center justify-center rounded border border-neutral-700 bg-neutral-800 text-neutral-100 select-none",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>) {
  return (
    <ContextMenuPrimitive.Positioner
      data-slot="context-menu-positioner"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

function ContextMenuPopup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Popup>) {
  return (
    <ContextMenuPrimitive.Popup
      data-slot="context-menu-popup"
      className={cn(
        "origin-(--transform-origin) rounded-md bg-neutral-800 py-1 text-neutral-100 shadow-lg outline  outline-neutral-700 transition-opacity data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item>) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-2 pr-8 pl-4 text-sm leading-4 outline-none transition-colors data-highlighted:bg-primary-600 data-highlighted:text-neutral-100 data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("mx-4 my-1.5 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function ContextMenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group
      data-slot="context-menu-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function ContextMenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.GroupLabel>) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-group-label"
      className={cn(
        "px-4 py-1.5 text-xs font-semibold text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-2 pr-8 pl-8 text-sm leading-4 outline-none transition-colors data-highlighted:bg-primary-600 data-highlighted:text-neutral-100 data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-current opacity-0 data-checked:opacity-100" />
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-2 pr-8 pl-8 text-sm leading-4 outline-none transition-colors data-highlighted:bg-primary-600 data-highlighted:text-neutral-100 data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <span className="h-2 w-2 rounded-sm bg-current opacity-0 data-checked:opacity-100" />
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuSubmenuRoot({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>) {
  return (
    <ContextMenuPrimitive.SubmenuRoot
      data-slot="context-menu-submenu-root"
      {...props}
    />
  );
}

function ContextMenuSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-submenu-trigger"
      className={cn(
        "relative flex cursor-default select-none items-center py-2 pr-8 pl-4 text-sm leading-4 outline-none transition-colors data-highlighted:bg-primary-600 data-highlighted:text-neutral-100 data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <LuChevronRight className="ml-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
}

function ContextMenuArrow({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Arrow>) {
  return (
    <ContextMenuPrimitive.Arrow
      data-slot="context-menu-arrow"
      className={cn("fill-neutral-800", className)}
      {...props}
    />
  );
}

function ContextMenuBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Backdrop>) {
  return (
    <ContextMenuPrimitive.Backdrop
      data-slot="context-menu-backdrop"
      className={cn("fixed inset-0 z-40", className)}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuCheckboxItem,
  ContextMenuSubmenuRoot,
  ContextMenuSubmenuTrigger,
  ContextMenuArrow,
  ContextMenuBackdrop,
};
