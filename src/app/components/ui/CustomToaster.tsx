import { Toaster } from "react-hot-toast";

export const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          border: "1px solid #713200",
          padding: "16px",
          marginBottom: "2rem",
          color: "#713200",
        },
        duration: 3000,
        success: {
          style: {
            border: "2px solid #15803d",
            color: "#052e16",
            backgroundColor: "#f0fdf4",
          },
        },
        error: {
          style: {
            border: "2px solid #ef4444",
            color: "#991b1b",
            backgroundColor: "#fef2f2",
          },
        },
        loading: {
          style: {
            border: "2px solid #64748b",
            color: "#404040",
            backgroundColor: "#e2e8f0",
          },
        },
      }}
    />
  );
};
