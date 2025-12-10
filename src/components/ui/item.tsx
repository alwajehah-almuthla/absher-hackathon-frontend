"use client";

import * as React from "react";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const itemVariants = cva(
  "flex items-center gap-3 rounded-md transition-colors text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 hover:bg-neutral-800/80",
        outline: "border border-neutral-700 hover:bg-neutral-800/50",
        muted: "bg-neutral-800/50 hover:bg-neutral-800/80",
      },
      size: {
        default: "p-4",
        sm: "p-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ItemProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof itemVariants> {}

function Item({ render, className, variant, size, ...props }: ItemProps) {
  const defaultProps = {
    "data-slot": "item",
    className: cn(itemVariants({ variant, size }), className),
  } as const;

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });

  return element;
}

function ItemGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-group"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function ItemSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      data-slot="item-separator"
      className={cn("border-t border-neutral-700", className)}
      {...props}
    />
  );
}

const itemMediaVariants = cva("flex shrink-0 items-center justify-center", {
  variants: {
    variant: {
      default: "size-10",
      icon: "size-5",
      image: "size-16 overflow-hidden rounded",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ItemMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemMediaVariants> {}

function ItemMedia({ className, variant, ...props }: ItemMediaProps) {
  return (
    <div
      data-slot="item-media"
      className={cn(itemMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function ItemContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex flex-1 flex-col gap-1", className)}
      {...props}
    />
  );
}

function ItemTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-title"
      className={cn("font-medium leading-none", className)}
      {...props}
    />
  );
}

function ItemDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-description"
      className={cn("text-sm text-neutral-400", className)}
      {...props}
    />
  );
}

function ItemActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  );
}

function ItemHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-header"
      className={cn("text-sm font-medium text-neutral-400", className)}
      {...props}
    />
  );
}

function ItemFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-footer"
      className={cn("text-sm text-neutral-400", className)}
      {...props}
    />
  );
}

export {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
};
