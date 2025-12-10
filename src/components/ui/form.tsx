"use client";

import type * as React from "react";
import { Field as FieldPrimitive } from "@base-ui-components/react/field";
import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react/fieldset";
import { Form as FormPrimitive } from "@base-ui-components/react/form";

import { cn } from "@/lib/utils";

// ===== Form Component =====
function Form({
  className,
  ...props
}: React.ComponentProps<typeof FormPrimitive>) {
  return (
    <FormPrimitive
      data-slot="form"
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    />
  );
}

// ===== Field Components =====
function Field({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex w-full flex-col items-start gap-1", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Label>) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn(
        "text-sm font-medium text-neutral-100 data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function FieldControl({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Control>) {
  return (
    <FieldPrimitive.Control
      data-slot="field-control"
      className={cn(
        "h-10 w-full rounded-md border border-neutral-700 bg-neutral-800 px-3.5 text-base text-neutral-100 placeholder:text-neutral-400",
        "focus:outline focus:-outline-offset-1 focus:outline-primary-600",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-invalid:border-error-700 data-invalid:focus:outline-error-800",
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-sm text-neutral-400", className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-sm text-error-400", className)}
      {...props}
    />
  );
}

function FieldValidity({
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Validity>) {
  return <FieldPrimitive.Validity data-slot="field-validity" {...props} />;
}

// ===== Fieldset Components =====
function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Root>) {
  return (
    <FieldsetPrimitive.Root
      data-slot="fieldset"
      className={cn("flex w-full flex-col gap-4 border-0 p-0 m-0", className)}
      {...props}
    />
  );
}

function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Legend>) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn(
        "border-b border-neutral-700 pb-3 text-lg font-medium text-neutral-100 tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export {
  Form,
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldValidity,
  Fieldset,
  FieldsetLegend,
};
