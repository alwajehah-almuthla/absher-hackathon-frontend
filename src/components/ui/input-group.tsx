"use client";

import type * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";

function InputGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "relative min-w-0 w-full",
        "[&:has([data-slot='input-group-control']:focus)_[data-slot='input-group-addon']]:text-primary-600",
        className,
      )}
      {...props}
    />
  );
}

type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: InputGroupAddonAlign;
}

function InputGroupAddon({
  className,
  align = "inline-start",
  children,
  ...props
}: InputGroupAddonProps) {
  const alignmentClasses = {
    "inline-start": "left-3 top-1/2 -translate-y-1/2",
    "inline-end": "right-3 top-1/2 -translate-y-1/2",
    "block-start": "top-2 left-3 right-3",
    "block-end": "bottom-2 left-3 right-3",
  };

  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(
        "pointer-events-none absolute z-10 flex items-center gap-1.5 text-sm text-neutral-400 transition-colors",
        "[&>button]:pointer-events-auto [&>a]:pointer-events-auto *:[[role=button]]:pointer-events-auto",
        alignmentClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface InputGroupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "icon-xs" | "sm" | "icon-sm";
  variant?: "default" | "outline" | "ghost";
}

function InputGroupButton({
  className,
  size = "xs",
  variant = "ghost",
  children,
  ...props
}: InputGroupButtonProps) {
  const sizeClasses = {
    xs: "h-6 px-2 text-xs",
    "icon-xs": "size-6 p-0",
    sm: "h-7 px-2.5 text-sm",
    "icon-sm": "size-7 p-0",
  };

  const variantClasses = {
    default: "bg-neutral-700 text-neutral-100 hover:bg-neutral-600",
    outline:
      "border border-neutral-600 bg-transparent text-neutral-300 hover:bg-neutral-700/50",
    ghost: "text-neutral-400 hover:bg-neutral-700/50 hover:text-neutral-200",
  };

  return (
    <button
      data-slot="input-group-button"
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded font-medium transition-colors",
        "focus-visible:outline focus-visible:outline-primary-600",
        "disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function InputGroupText({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("text-xs text-neutral-400", className)}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input data-slot="input-group-control" className={className} {...props} />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<typeof Textarea>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn("resize-none", className)}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
