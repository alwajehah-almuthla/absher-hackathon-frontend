"use client";

import type * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";

import { cn } from "@/lib/utils";
import { LuCheck, LuChevronRight, LuDot, LuChevronDown } from "react-icons/lu";

function Menu({ ...props }: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      className={cn(
        "flex h-10 items-center justify-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-800 px-3.5 text-base font-medium text-neutral-100 select-none hover:bg-neutral-800/80 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 active:bg-neutral-800/80 data-popup-open:bg-neutral-800/80",
        className,
      )}
      {...props}
    />
  );
}

function MenuPortal({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
}

function MenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
  return (
    <MenuPrimitive.Positioner
      data-slot="menu-positioner"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

function MenuPopup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup>) {
  return (
    <MenuPrimitive.Popup
      data-slot="menu-popup"
      className={cn(
        "origin-(--transform-origin) rounded-md bg-neutral-800 py-1 text-neutral-100 border border-neutral-700 shadow-lg outline-none transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function MenuArrow({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Arrow>) {
  return (
    <MenuPrimitive.Arrow
      data-slot="menu-arrow"
      className={cn(
        "data-[side=bottom]:-top-2 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    >
      {children || <ArrowSvg />}
    </MenuPrimitive.Arrow>
  );
}

function MenuItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item>) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(
        "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      className={cn("mx-4 my-1.5 h-px bg-neutral-700", className)}
      {...props}
    />
  );
}

function MenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Group>) {
  return (
    <MenuPrimitive.Group
      data-slot="menu-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function MenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel>) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-group-label"
      className={cn(
        "px-4 py-2 text-xs font-semibold text-neutral-400 select-none",
        className,
      )}
      {...props}
    />
  );
}

function MenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      className={cn(
        "flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenuCheckboxItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItemIndicator>) {
  return (
    <MenuPrimitive.CheckboxItemIndicator
      data-slot="menu-checkbox-item-indicator"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children || <LuCheck />}
    </MenuPrimitive.CheckboxItemIndicator>
  );
}

function MenuRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="menu-radio-group"
      className={cn("", className)}
      {...props}
    />
  );
}

function MenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-item"
      className={cn(
        "flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-[disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function MenuRadioItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItemIndicator>) {
  return (
    <MenuPrimitive.RadioItemIndicator
      data-slot="menu-radio-item-indicator"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children || <LuDot />}
    </MenuPrimitive.RadioItemIndicator>
  );
}

function MenuSubmenu({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-submenu" {...props} />;
}

function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      className={cn(
        "flex cursor-default items-center justify-between py-2 pr-2 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-100 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-neutral-700 data-disabled:opacity-50 data-disabled:pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
      <LuChevronRight className="ml-2 size-3" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

// Icon components
function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("w-5", props.className)}
      viewBox="0 0 20 10"
      fill="none"
      {...props}
    >
      <title>Arrow Icon</title>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-neutral-800"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-neutral-700"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-neutral-700"
      />
    </svg>
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  LuChevronDown as ChevronDownIcon,
};
