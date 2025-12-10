"use client";

import { Button as BaseButton } from "@base-ui-components/react/button";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/styles/ui/buttons";

type ButtonProps = BaseButton.Props & VariantProps<typeof buttonVariants>;

const Button = ({
  className,
  variant,
  size,
  focusableWhenDisabled = false,
  nativeButton = true,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      focusableWhenDisabled={focusableWhenDisabled}
      nativeButton={nativeButton}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
