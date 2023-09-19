"use client";
import { ChangeEvent, FC, forwardRef, Ref } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type: "email" | "hidden" | "number" | "tel" | "password" | "text" | "url";
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, id, type, register, value, onChange, errors, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="mb-3">
        <div className="flex items-baseline justify-between">
          <label
            className="text-base font-medium text-gray-800 leading-9"
            htmlFor={id}
          >
            {label}
          </label>
          {errors && errors[id]?.message && (
            <span className="opacity-80 text-red-500">
              {errors[id]?.message as string}
            </span>
          )}
        </div>
        <input
          id={id}
          {...register(id)}
          className="box-border w-full h-10 appearance-none rounded-md 
          px-4 py-2 text-lg leading-none text-black outline-none bg-slate-100
          border-2 border-slate-400 focus:border-gray-700 
          transition-all"
          ref={ref}
          type={type}
          defaultValue={value} // Pass the value prop
          onChange={onChange} // Pass the onChange prop
          {...props}
        />
      </div>
    );
  }
);
