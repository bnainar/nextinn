"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { FC, useCallback } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useForm, FieldValues } from "react-hook-form";
import { StepHeader } from "../ui/StepHeader";
import { Button } from "@/app/components/ui/Button";
import useRentFormStore from "@/app/stores/rentstore";

declare global {
  var cloudinary: any;
}
interface ImageStepProps {
  onPrevious: () => void;
  onNext: (data?: any) => void;
}

const ImageStep: FC<ImageStepProps> = ({ onPrevious, onNext }) => {
  const imgURL = useRentFormStore((state) => state.formData.imgURL);
  const setFormData = useRentFormStore((state) => state.setFormData);

  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: { imgURL },
  });

  const onUpload = useCallback(
    (res: any) => {
      setFormData({ imgURL: res.info.secure_url });
    },
    [setFormData]
  );
  return (
    <form onSubmit={handleSubmit(() => onNext())}>
      <StepHeader
        title="Share a picture of your place"
        subtitle="Pick something distinctive and recognizable"
      />

      <CldUploadWidget
        uploadPreset="ecmolcbd"
        onUpload={onUpload}
        options={{ maxFiles: 1 }}
      >
        {({ open, error }) => {
          const handleOnClick = (e: any) => {
            error && console.log(error);
            e.preventDefault();
            if (open && open != undefined) open?.();
          };
          return (
            open && (
              <div
                className="relative cursor-pointer hover:brightness-90 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                onClick={handleOnClick}
              >
                <BiImageAdd size={40} className="mx-auto text-slate-500" />
                <div className="mx-auto text-slate-500 text-xl">
                  Click to Upload
                </div>
                {imgURL && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      src={imgURL}
                      sizes="100"
                      alt="Uploaded image"
                    />
                  </div>
                )}
              </div>
            )
          );
        }}
      </CldUploadWidget>
      {imgURL && (
        <div className="text-slate-500 mt-5">
          To replace above image, click the image again
        </div>
      )}
      <div className="flex flex-row items-end float-right gap-5">
        <Button
          variant="outline"
          width="content"
          type="button"
          className="mt-3 text-center"
          onClick={onPrevious}
        >
          Prev
        </Button>
        <Button
          variant="filled"
          width="content"
          type="submit"
          className="mt-3 text-center"
          disabled={!imgURL}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export { ImageStep };
