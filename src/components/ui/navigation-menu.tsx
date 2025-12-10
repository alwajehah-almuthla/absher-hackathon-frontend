"use client";

import type * as React from "react";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui-components/react/navigation-menu";

import { cn } from "@/lib/utils";

function NavigationMenuRoot({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("min-w-max rounded-lg bg-neutral-800 p-1", className)}
      {...props}
    />
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("relative flex list-none", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "box-border flex items-center justify-center gap-1.5 h-10 px-3.5 m-0 rounded-md bg-neutral-800 text-neutral-100 font-medium text-base leading-6 select-none no-underline hover:bg-neutral-700 active:bg-neutral-700 data-popup-open:bg-neutral-700 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 focus-visible:relative",
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuIcon({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-icon"
      className={cn(
        "transition-transform duration-200 ease-in-out data-popup-open:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "w-full h-full p-6 min-w-[400px] transition-[opacity,transform,translate] duration-(--duration) ease-(--easing) data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:data-[activation-direction=left]:translate-x-[-50%] data-starting-style:data-[activation-direction=right]:translate-x-[50%] data-ending-style:data-[activation-direction=left]:translate-x-[50%] data-ending-style:data-[activation-direction=right]:translate-x-[-50%]",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "box-border flex items-center justify-center gap-1.5 h-10 px-3.5 m-0 rounded-md bg-neutral-800 text-neutral-100 font-medium text-base leading-6 select-none no-underline hover:bg-neutral-700 active:bg-neutral-700 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary-600 focus-visible:relative",
        className,
      )}
      // biome-ignore lint/a11y/useAnchorContent: <explanation>
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      render={<a />}
      {...props}
    />
  );
}

function NavigationMenuPortal({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Portal>) {
  return (
    <NavigationMenuPrimitive.Portal
      data-slot="navigation-menu-portal"
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>) {
  return (
    <NavigationMenuPrimitive.Positioner
      data-slot="navigation-menu-positioner"
      sideOffset={10}
      collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
      collisionAvoidance={{ side: "none" }}
      className={cn(
        "box-border h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:-top-2.5 data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:-right-2.5 data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:-left-2.5 data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:-bottom-2.5 data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
        className,
      )}
      style={{
        ["--duration" as string]: "0.35s",
        ["--easing" as string]: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      {...props}
    />
  );
}

function NavigationMenuPopup({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Popup>) {
  return (
    <NavigationMenuPrimitive.Popup
      data-slot="navigation-menu-popup"
      className={cn(
        "relative h-(--popup-height) origin-(--transform-origin) rounded-lg bg-neutral-800 text-neutral-100 shadow-lg outline outline-neutral-700 transition-[opacity,transform,width,height,scale,translate] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0 w-(--popup-width)",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuArrow({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Arrow>) {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot="navigation-menu-arrow"
      className={cn(
        "flex transition-[left] duration-(--duration) ease-(--easing) data-[side=bottom]:-top-2 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuArrow,
  NavigationMenuViewport,
};
