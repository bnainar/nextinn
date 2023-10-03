"use client";
import { CountrySelect } from "@/app/components/ui/CountrySelect";
import { useForm, FieldValues } from "react-hook-form";
import { FC, useMemo } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { StepHeader } from "../ui/StepHeader";
import { Button } from "@/app/components/ui/Button";
import useRentFormStore from "@/app/stores/rentstore";
import dynamic from "next/dynamic";

interface LocationStepProps {
  onPrevious: () => void;
  onNext: (data: any) => void;
}

const LocationStep: FC<LocationStepProps> = ({ onPrevious, onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const { handleSubmit, watch, setValue } = useForm<FieldValues>({
    defaultValues: {
      location: formData.location,
    },
  });
  const onSubmitStep = (data: any) => {
    onNext({ location: data.location });
  };
  const location = watch("location");

  const Map = useMemo(
    () =>
      dynamic(() => import("../../../../components/Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );
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
      <div className="h-[35vh] bg-slate-300 rounded-lg my-5">
        <Map center={location?.latlng} />
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
