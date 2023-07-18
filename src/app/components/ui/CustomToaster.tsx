"use client";
import { FC } from "react";
import { toast, Toaster } from "react-hot-toast";

interface CustomToasterProps {}

const CustomToaster: FC<CustomToasterProps> = ({}) => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        duration: 3000,
        success: {
          style: {
            border: "2px solid #15803d",
            color: "#052e16",
          },
        },
        error: {
          style: {
            border: "2px solid #dc2626",
            color: "#ef4444",
          },
        },
        loading: {
          style: {
            border: "2px solid #dc2626",
            color: "#ef4444",
          },
        },
      }}
    />
  );
};

export { CustomToaster, toast };
