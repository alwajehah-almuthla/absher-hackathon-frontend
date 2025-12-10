import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-neutral-100 border-primary-700",
        outline: "bg-transparent text-neutral-100 border-neutral-700",
        secondary: "bg-neutral-700 text-neutral-100 border-neutral-600",
        destructive: "bg-error-800 text-neutral-100 border-error-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
