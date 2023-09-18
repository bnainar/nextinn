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
  onNext: (data: any) => void;
}

const ImageStep: FC<ImageStepProps> = ({ onPrevious, onNext }) => {
  const { handleSubmit, watch, setValue } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: "",
    },
  });
  const imageSrc = watch("imageSrc");
  const onUpload = useCallback(
    (res: any) => {
      setValue("imageSrc", res.info.secure_url);
    },
    [setValue]
  );
  const formData = useRentFormStore((state) => state.formData);
  const setFormData = useRentFormStore((state) => state.setFormData);
  const oldS =
    "relative w-full h-52 border-2 border-dashed border-slate-500 bg-slate-200/50 hover:bg-slate-300/40 rounded-lg flex flex-col items-center justify-center gap-2";
  const onSubmitStep = (data: any) => {
    setFormData(data);
    onNext(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitStep)}>
      <StepHeader
        title="Share a picture of your place"
        subtitle="Pick something distinctive and recognizable"
      />

      <CldUploadWidget
        uploadPreset="ecmolcbd"
        onUpload={onUpload}
        options={{ maxFiles: 1 }}
      >
        {({ open }) => {
          const handleOnClick = (e: any) => {
            e.preventDefault();
            open();
          };
          return (
            <div
              className="relative cursor-pointer hover:brightness-90 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
              onClick={handleOnClick}
            >
              <BiImageAdd size={40} className="mx-auto text-slate-500" />
              <div className="mx-auto text-slate-500 text-xl">
                Click to Upload
              </div>
              {imageSrc && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={imageSrc}
                    alt="Uploaded image"
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
      {imageSrc && (
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
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export { ImageStep };
