"use client";

import type * as React from "react";
import Link from "next/link";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeftRightEllipsis,
} from "react-icons/lu";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/styles/ui/buttons";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="pagination-item" className={cn("", className)} {...props} />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<typeof Link>;

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: "dark-ghost", size: "icon" }),
        "rounded",
        isActive && "bg-neutral-700 text-neutral-100 hover:bg-neutral-700",
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot="pagination-previous"
      aria-label="Go to previous page"
      className={cn("h-[34px] w-auto gap-1 px-2.5", className)}
      {...props}
    >
      <LuChevronLeft className="size-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot="pagination-next"
      aria-label="Go to next page"
      className={cn("h-[34px] w-auto gap-1 px-2.5", className)}
      {...props}
    >
      <span>Next</span>
      <LuChevronRight className="size-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden
      className={cn(
        "flex h-9 w-9 items-center justify-center text-neutral-400",
        className,
      )}
      {...props}
    >
      <LuChevronsLeftRightEllipsis className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
