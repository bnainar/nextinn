"use client";
import { ReactElement, Ref, forwardRef } from "react";
import "../../globals.css";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MdOutlineClose } from "react-icons/md";

interface DialogContentProps {
  children: ReactElement;
  title: string;
}

// eslint-disable-next-line react/display-name
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, title, ...props }, forwardedRef: Ref<HTMLDivElement>) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 DialogOverlay">
        <DialogPrimitive.Content
          {...props}
          ref={forwardedRef}
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] 
      max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] 
      rounded-[6px] bg-slate-100 p-[0px] 
      shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
      focus:outline-none DialogContent"
        >
          <header className="flex justify-between border-b-[1px] border-slate-300 py-4 px-5">
            <DialogPrimitive.Close
              aria-label="Close"
              className="grow-0 w-8 h-8 rounded-full hover:bg-slate-300 items-center "
            >
              <MdOutlineClose
                className="w-full fill-neutral-600"
                fontSize="1.25em"
              />
            </DialogPrimitive.Close>
            <DialogPrimitive.Title className="grow text-center font-semibold text-lg text-gray-700">
              {title}
            </DialogPrimitive.Title>
            <div className="w-8"></div>
          </header>
          <div className="py-4 px-8 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
