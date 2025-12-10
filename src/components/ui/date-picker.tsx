"use client";

import * as React from "react";
import { format } from "date-fns";
import { LuCalendar } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/styles/ui/buttons";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  buttonVariant?: "dark-ghost" | "dark-outline" | "dark-solid";
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
  disabled = false,
  buttonVariant = "dark-outline",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: buttonVariant }),
          "w-full justify-start text-left font-normal h-10 px-3.5",
          !date && "text-neutral-400",
          className,
        )}
      >
        <LuCalendar className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              disabled={disabled}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}

export interface DateRangePickerProps {
  dateRange?: { from: Date | undefined; to?: Date | undefined };
  onDateRangeChange?: (
    range: { from: Date | undefined; to?: Date | undefined } | undefined,
  ) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  buttonVariant?: "dark-ghost" | "dark-outline" | "dark-solid";
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  className,
  disabled = false,
  buttonVariant = "dark-outline",
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: buttonVariant }),
          "w-full justify-start text-left font-normal h-10 px-3.5",
          !dateRange?.from && "text-neutral-400",
          className,
        )}
      >
        <LuCalendar className="mr-2 h-4 w-4" />
        {dateRange?.from ? (
          dateRange.to ? (
            <>
              {format(dateRange.from, "LLL dd, y")} -{" "}
              {format(dateRange.to, "LLL dd, y")}
            </>
          ) : (
            format(dateRange.from, "LLL dd, y")
          )
        ) : (
          <span>{placeholder}</span>
        )}
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="w-auto p-0">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={onDateRangeChange}
              disabled={disabled}
              numberOfMonths={2}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}

export interface DatePickerWithInputProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  inputClassName?: string;
  disabled?: boolean;
  name?: string;
}

function DatePickerWithInput({
  date,
  onDateChange,
  placeholder = "MM/DD/YYYY",
  inputClassName,
  disabled = false,
  name,
}: DatePickerWithInputProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (date) {
      setInputValue(format(date, "MM/dd/yyyy"));
    } else {
      setInputValue("");
    }
  }, [date]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Try to parse the input as a date
    const parsedDate = new Date(value);
    if (!Number.isNaN(parsedDate.getTime()) && value.length >= 8) {
      onDateChange?.(parsedDate);
    }
  };

  const handleInputBlur = () => {
    // Validate and format the date when input loses focus
    if (date) {
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "h-10 flex-1 rounded-md border border-neutral-700 bg-neutral-800 px-3.5 text-base text-neutral-100 placeholder:text-neutral-400",
          "focus:outline focus:-outline-offset-1 focus:outline-primary-600",
          "disabled:cursor-not-allowed disabled:opacity-50",
          inputClassName,
        )}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          disabled={disabled}
          className={cn(
            buttonVariants({ variant: "dark-outline", size: "icon" }),
            "shrink-0",
          )}
        >
          <LuCalendar className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  onDateChange?.(newDate);
                  setOpen(false);
                }}
                disabled={disabled}
              />
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </Popover>
    </div>
  );
}

export interface DateOfBirthPickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  buttonVariant?: "dark-ghost" | "dark-outline" | "dark-solid";
}

function DateOfBirthPicker({
  date,
  onDateChange,
  placeholder = "Pick your date of birth",
  className,
  disabled = false,
  buttonVariant = "dark-outline",
}: DateOfBirthPickerProps) {
  const currentYear = new Date().getFullYear();
  const fromYear = currentYear - 100;
  const toYear = currentYear - 18;

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: buttonVariant }),
          "w-full justify-start text-left font-normal h-10 px-3.5",
          !date && "text-neutral-400",
          className,
        )}
      >
        <LuCalendar className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              disabled={disabled}
              captionLayout="dropdown"
              fromYear={fromYear}
              toYear={toYear}
              defaultMonth={date || new Date(currentYear - 25, 0)}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}

export { DatePicker, DateRangePicker, DatePickerWithInput, DateOfBirthPicker };
