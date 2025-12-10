import { cva } from "class-variance-authority";

// Primary button styles
const primarystyles = {
  solid:
    "bg-primary-500 border border-primary-600 text-neutral-50 hover:bg-primary-600 active:bg-primary-700",
  outline:
    "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100",
  ghost: "text-primary-500 hover:bg-primary-50 active:bg-primary-100",
};

// secondary button styles
const secondarystyles = {
  solid:
    "bg-secondary-500 border border-secondary-600 text-neutral-50 hover:bg-secondary-600 active:bg-secondary-700",
  outline:
    "bg-transparent border border-secondary-500 text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100",
  ghost: "text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100",
};

// dark button styles
const darkstyles = {
  solid:
    "bg-neutral-800 border border-neutral-700 text-neutral-50 hover:bg-neutral-900 active:bg-neutral-950",
  outline:
    "bg-transparent border border-neutral-700 text-neutral-100 hover:bg-neutral-800/50 active:bg-neutral-800",
  ghost: "text-neutral-100 hover:bg-neutral-800/50 active:bg-neutral-800",
};

// light button styles
const lightstyles = {
  solid:
    "bg-neutral-100 border border-neutral-200 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300",
  outline:
    "bg-transparent border border-neutral-300 text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200",
  ghost: "text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200",
};

// white button styles
const whitestyles = {
  solid:
    "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100",
};

// success button styles
const successstyles = {
  solid:
    "bg-success-500 border border-success-600 text-neutral-50 hover:bg-success-600 active:bg-success-700",
  outline:
    "bg-transparent border border-success-500 text-success-500 hover:bg-success-50 active:bg-success-100",
  ghost: "text-success-500 hover:bg-success-50 active:bg-success-100",
};

// error button styles
const errorstyles = {
  solid:
    "bg-error-500 border border-error-600 text-neutral-50 hover:bg-error-600 active:bg-error-700",
  outline:
    "bg-transparent border border-error-500 text-error-500 hover:bg-error-50 active:bg-error-100",
  ghost: "text-error-500 hover:bg-error-50 active:bg-error-100",
};

// warning button styles
const warningstyles = {
  solid:
    "bg-warning-500 border border-warning-600 text-neutral-50 hover:bg-warning-600 active:bg-warning-700",
  outline:
    "bg-transparent border border-warning-500 text-warning-500 hover:bg-warning-50 active:bg-warning-100",
  ghost: "text-warning-500 hover:bg-warning-50 active:bg-warning-100",
};

// info button styles
const infostyles = {
  solid:
    "bg-info-500 border border-info-600 text-neutral-50 hover:bg-info-600 active:bg-info-700",
  outline:
    "bg-transparent border border-info-500 text-info-500 hover:bg-info-50 active:bg-info-100",
  ghost: "text-info-500 hover:bg-info-50 active:bg-info-100",
};

// emerald button styles
const emeraldstyles = {
  solid:
    "bg-emerald-500 border border-emerald-600 text-neutral-50 hover:bg-emerald-600 active:bg-emerald-700",
  outline:
    "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-50 active:bg-emerald-100",
  ghost: "text-emerald-500 hover:bg-emerald-50 active:bg-emerald-100",
};

const sidebarIconStyles =
  "bg-white drop-shadow-default-sm text-neutral-700 size-[38px]!";

const softRoundedButtonStyles =
  "bg-white/70 !rounded-full drop-shadow-default-sm text-neutral-500";
const softButtonStyles = "bg-white/70 drop-shadow-default-sm text-neutral-500";

// size styles
const sizestyles = {
  default: "h-[34px] px-3  text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-[38px] px-3  text-base",
  icon: "size-[34px] px-0 ",
  "large-icon": "size-[38px] min-w-[38px] min-h-[38px] px-0 ",
  "small-icon": "size-8 min-w-8 min-h-8 px-0 ",
};

// button variants
export const buttonVariants = cva(
  "gap-2 rounded cursor-pointer focus:ring-2 focus:ring-neutral-200 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        "sidebar-icon": sidebarIconStyles,
        soft: softButtonStyles,
        "soft-rounded": softRoundedButtonStyles,
        "primary-solid": primarystyles.solid,
        "primary-outline": primarystyles.outline,
        "primary-ghost": primarystyles.ghost,
        "secondary-solid": secondarystyles.solid,
        "secondary-outline": secondarystyles.outline,
        "secondary-ghost": secondarystyles.ghost,
        "dark-solid": darkstyles.solid,
        "dark-outline": darkstyles.outline,
        "dark-ghost": darkstyles.ghost,
        "light-solid": lightstyles.solid,
        "white-solid": whitestyles.solid,
        "light-outline": lightstyles.outline,
        "light-ghost": lightstyles.ghost,
        "success-solid": successstyles.solid,
        "success-outline": successstyles.outline,
        "success-ghost": successstyles.ghost,
        "error-solid": errorstyles.solid,
        "error-outline": errorstyles.outline,
        "error-ghost": errorstyles.ghost,
        "warning-solid": warningstyles.solid,
        "warning-outline": warningstyles.outline,
        "warning-ghost": warningstyles.ghost,
        "info-solid": infostyles.solid,
        "info-outline": infostyles.outline,
        "info-ghost": infostyles.ghost,
        "emerald-solid": emeraldstyles.solid,
        "emerald-outline": emeraldstyles.outline,
        "emerald-ghost": emeraldstyles.ghost,
      },
      size: sizestyles,
    },
    defaultVariants: {
      variant: "light-solid",
      size: "default",
    },
  },
);
