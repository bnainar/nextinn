"use client";
import { FC, forwardRef, Ref, useId } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  type:
    | "button"
    | "email"
    | "hidden"
    | "number"
    | "tel"
    | "password"
    | "text"
    | "url";
  errors?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errors, ...props }, ref: Ref<HTMLInputElement>) => {
    // console.log(errors);
    // console.log("rendering " + errors);
    const id = useId();
    return (
      <div className="mb-3">
        <div className="flex items-baseline justify-between">
          <label
            className="text-base font-medium text-gray-800 leading-9"
            htmlFor={id}
          >
            {label}
          </label>
          {errors?.message && (
            <span className="opacity-80 text-red-500">{errors.message}</span>
          )}
        </div>
        <input
          id={id}
          className="box-border w-full h-10 appearance-none rounded-md 
          px-4 py-2 text-lg leading-none text-black outline-none bg-slate-100
          border-2 border-slate-400 focus:border-gray-700 
          transition-all"
          ref={ref}
          type={type}
          {...props}
        />
      </div>
    );
  }
);
