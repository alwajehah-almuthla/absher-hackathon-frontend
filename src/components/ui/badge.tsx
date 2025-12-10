"use client";

import { useRender } from "@base-ui-components/react/use-render";
import { mergeProps } from "@base-ui-components/react/merge-props";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { badgeVariants } from "@/styles/ui/badges";

interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({ render, variant, className, ...props }: BadgeProps) {
  const defaultProps: useRender.ElementProps<"span"> = {
    className: cn(badgeVariants({ variant }), className),
  };

  const element = useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(defaultProps, props),
  });

  return element;
}

export { Badge };
export type { BadgeProps };
