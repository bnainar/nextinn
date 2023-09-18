"use client";
import { CountrySelect } from "@/app/components/ui/CountrySelect";
import { useForm, FieldValues } from "react-hook-form";
import { FC } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { StepHeader } from "../ui/StepHeader";
import { Button } from "@/app/components/ui/Button";
import useRentFormStore from "@/app/stores/rentstore";

interface LocationStepProps {
  onPrevious: () => void;
  onNext: (data: any) => void;
}

const LocationStep: FC<LocationStepProps> = ({ onPrevious, onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      location: formData.location,
    },
  });
  const setFormData = useRentFormStore((state) => state.setFormData);
  const onSubmitStep = (data: any) => {
    console.log("loc", data);
    setFormData({ location: data.location });
    onNext(data);
  };
  const location = watch("location");
  return (
    <form className="h-full w-full" onSubmit={handleSubmit(onSubmitStep)}>
      <StepHeader
        title="Where is your awesome place?"
        subtitle="Select a country"
      />

      <CountrySelect
        location={location}
        onChange={(location: any) => setValue("location", location)}
      />
      <div className="py-10 m-auto">
        <MdOutlineLocationOn size={90} color="#94a3b8" className="w-full" />
      </div>
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
          disabled={location === null}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export { LocationStep };
