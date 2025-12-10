"use client";

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
  buttonGroupVariants,
} from "@/styles/ui/button-groups";

interface ButtonGroupProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof buttonGroupVariants> {}

function ButtonGroup({
  render,
  orientation,
  className,
  ...props
}: ButtonGroupProps) {
  const defaultProps: useRender.ElementProps<"div"> = {
    role: "group",
    className: cn(buttonGroupVariants({ orientation }), className),
  };

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });

  return element;
}

interface ButtonGroupSeparatorProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof buttonGroupSeparatorVariants> {}

function ButtonGroupSeparator({
  render,
  orientation,
  className,
  ...props
}: ButtonGroupSeparatorProps) {
  const defaultProps: useRender.ElementProps<"div"> = {
    className: cn(buttonGroupSeparatorVariants({ orientation }), className),
    "aria-hidden": "true",
  };

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });

  return element;
}

interface ButtonGroupTextProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof buttonGroupTextVariants> {}

function ButtonGroupText({
  render,
  className,
  ...props
}: ButtonGroupTextProps) {
  const defaultProps: useRender.ElementProps<"span"> = {
    className: cn(buttonGroupTextVariants(), className),
  };

  const element = useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(defaultProps, props),
  });

  return element;
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
export type {
  ButtonGroupProps,
  ButtonGroupSeparatorProps,
  ButtonGroupTextProps,
};
