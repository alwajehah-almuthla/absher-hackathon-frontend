"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { LuDot } from "react-icons/lu";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      data-slot="input-otp-slot"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border border-neutral-700 bg-neutral-800 text-sm text-neutral-100 transition-all",
        "first:rounded-l-md last:rounded-r-md",
        isActive && "z-10 ring-2 ring-primary-500 ring-offset-0",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-neutral-100 duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div data-slot="input-otp-separator" {...props}>
      <LuDot className="text-neutral-400" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
