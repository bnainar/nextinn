"use client";
import { Counter } from "@/app/components/ui/Counter";
import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { StepHeader } from "../ui/StepHeader";
import useRentFormStore from "@/app/stores/rentstore";
import { Button } from "@/app/components/ui/Button";

interface InfoStepProps {
  onPrevious: () => void;
  onNext: (data: any) => void;
}

export const InfoStep: FC<InfoStepProps> = ({ onPrevious, onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const { handleSubmit, watch, setValue } = useForm<FieldValues>({
    defaultValues: {
      roomCount: formData.roomCount,
      bathCount: formData.bathCount,
      guestsLimit: formData.guestsLimit,
    },
  });
  const roomCount = watch("roomCount");
  const bathCount = watch("bathCount");
  const guestsLimit = watch("guestsLimit");
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <StepHeader
        title="Share some info about your place"
        subtitle="Such as number of guests allowed, etc."
      />

      <div>
        <Counter
          title="Rooms"
          subtitle="Total Rooms"
          value={roomCount}
          onChange={(val: number) => setValue("roomCount", val)}
        />
        <Counter
          title="Guests"
          subtitle="Number of Guests allowed"
          value={guestsLimit}
          onChange={(val: number) => setValue("guestsLimit", val)}
        />
        <Counter
          title="Bathrooms"
          subtitle="No. of bathrooms available"
          value={bathCount}
          onChange={(val: number) => setValue("bathCount", val)}
        />
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
        >
          Next
        </Button>
      </div>
    </form>
  );
};
