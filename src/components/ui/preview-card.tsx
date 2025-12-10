"use client";

import type * as React from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";

import { cn } from "@/lib/utils";

function PreviewCard({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Root>) {
  return <PreviewCardPrimitive.Root data-slot="preview-card" {...props} />;
}

function PreviewCardTrigger({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="preview-card-trigger"
      className={cn(
        "text-primary-500 no-underline decoration-primary-500/60 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-primary-600 data-popup-open:underline data-popup-open:focus-visible:no-underline",
        className,
      )}
      {...props}
    />
  );
}

function PreviewCardPortal({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Portal>) {
  return (
    <PreviewCardPrimitive.Portal data-slot="preview-card-portal" {...props} />
  );
}

function PreviewCardBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Backdrop>) {
  return (
    <PreviewCardPrimitive.Backdrop
      data-slot="preview-card-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-starting-style:opacity-0 data-ending-style:opacity-0 data-open:fade-in-0 data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function PreviewCardPositioner({
  sideOffset = 8,
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Positioner>) {
  return (
    <PreviewCardPrimitive.Positioner
      data-slot="preview-card-positioner"
      sideOffset={sideOffset}
      className={className}
      {...props}
    />
  );
}

function PreviewCardPopup({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Popup>) {
  return (
    <PreviewCardPrimitive.Popup
      data-slot="preview-card-popup"
      className={cn(
        "w-60 origin-(--transform-origin) flex flex-col gap-2 rounded-lg bg-neutral-800 p-2 text-neutral-100 shadow-lg outline-1 outline-neutral-700 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 z-50",
        className,
      )}
      {...props}
    />
  );
}

function PreviewCardArrow({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Arrow>) {
  return (
    <PreviewCardPrimitive.Arrow
      data-slot="preview-card-arrow"
      className={cn(
        "data-[side=bottom]:-top-2 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
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
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
  ArrowSvg,
};
