"use client";
import { ReactElement, Ref, forwardRef } from "react";
import "../../globals.css";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

interface AlertDialogContentProps {
  children: ReactElement;
  title: string;
}

// eslint-disable-next-line react/display-name
export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ children, title, ...props }, forwardedRef: Ref<HTMLDivElement>) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogPrimitive.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 DialogOverlay">
      <AlertDialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] 
      max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] 
      rounded-[6px] bg-slate-100 p-[0px] 
      shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
      focus:outline-none DialogContent"
      >
        <header className="flex justify-between border-b-[1px] border-slate-300 py-4 px-5">
          <AlertDialogPrimitive.Title className="grow text-center font-semibold text-lg text-gray-700">
            {title}
          </AlertDialogPrimitive.Title>
          <div className="w-8"></div>
        </header>
        <div className="py-4 px-8 max-h-[70vh] overflow-y-auto">{children}</div>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Overlay>
  </AlertDialogPrimitive.Portal>
));

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
