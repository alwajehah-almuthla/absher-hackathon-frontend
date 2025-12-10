"use client";

import { cn } from "@/lib/utils";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { LuCheck, LuChevronRight, LuDot } from "react-icons/lu";
import { Menubar as MenubarPrimitive } from "@base-ui-components/react/menubar";
import type * as React from "react";

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive>) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex rounded-md border border-neutral-700 bg-neutral-800 p-0.5",
        className,
      )}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "h-8 rounded px-3 text-sm font-medium text-neutral-100 outline-none select-none focus-visible:bg-neutral-700 hover:bg-neutral-700 data-[disabled:opacity-50 data-popup-open:bg-neutral-700",
        className,
      )}
      {...props}
    />
  );
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarPositioner({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
  return (
    <MenuPrimitive.Positioner
      data-slot="menubar-positioner"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

function MenubarPopup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup>) {
  return (
    <MenuPrimitive.Popup
      data-slot="menubar-popup"
      className={cn(
        "origin-(--transform-origin) rounded-md bg-neutral-800 py-1 text-neutral-100 border border-neutral-700 shadow-lg outline-none transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function MenubarItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item>) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
      className={cn(
        "flex cursor-default items-center justify-between gap-4 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("mx-4 my-1.5 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function MenubarSubmenu({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot data-slot="menubar-submenu" {...props} />;
}

function MenubarSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menubar-submenu-trigger"
      className={cn(
        "flex w-full cursor-default items-center justify-between gap-4 py-2 pr-2 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-popup-open:relative data-popup-open:z-0 data-popup-open:before:absolute data-popup-open:before:inset-x-1 data-popup-open:before:inset-y-0 data-popup-open:before:z-[-1] data-popup-open:before:rounded-sm data-popup-open:before:bg-neutral-800/50 data-highlighted:data-popup-open:before:bg-neutral-700",
        className,
      )}
      {...props}
    >
      {children}
      <LuChevronRight className="ml-2 size-3" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenubarGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Group>) {
  return (
    <MenuPrimitive.Group
      data-slot="menubar-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function MenubarGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel>) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menubar-group-label"
      className={cn(
        "px-4 py-2 text-xs font-semibold text-neutral-400 select-none",
        className,
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItemIndicator>) {
  return (
    <MenuPrimitive.CheckboxItemIndicator
      data-slot="menubar-checkbox-item-indicator"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children || <LuCheck />}
    </MenuPrimitive.CheckboxItemIndicator>
  );
}

function MenubarRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="menubar-radio-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function MenubarRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenubarRadioItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItemIndicator>) {
  return (
    <MenuPrimitive.RadioItemIndicator
      data-slot="menubar-radio-item-indicator"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children || <LuDot />}
    </MenuPrimitive.RadioItemIndicator>
  );
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarPositioner,
  MenubarPopup,
  MenubarItem,
  MenubarSeparator,
  MenubarSubmenu,
  MenubarSubmenuTrigger,
  MenubarGroup,
  MenubarGroupLabel,
  MenubarCheckboxItem,
  MenubarCheckboxItemIndicator,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRadioItemIndicator,
};
