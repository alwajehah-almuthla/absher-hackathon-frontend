import { cva } from "class-variance-authority";

export const buttonGroupVariants = cva(
  "inline-flex [&>*:not(:first-child):not(:last-child)]:rounded-none",
  {
    variants: {
      orientation: {
        horizontal:
          "flex-row [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:border-l-0",
        vertical:
          "flex-col [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child)]:border-t-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export const buttonGroupSeparatorVariants = cva("bg-neutral-700 shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-px self-stretch",
      vertical: "h-px self-stretch",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export const buttonGroupTextVariants = cva(
  "inline-flex items-center justify-center px-3 text-sm text-neutral-100 bg-neutral-800 border border-neutral-700 h-[34px]",
  {
    variants: {},
    defaultVariants: {},
  },
);
