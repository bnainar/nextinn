"use client";
import * as z from "zod";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepHeader } from "../ui/StepHeader";
import { Input } from "@/app/components/ui/Input";
import useRentFormStore from "@/app/stores/rentstore";
import { Button } from "@/app/components/ui/Button";

const schema = z.object({ price: z.number().gt(5).lt(3000) });

interface PriceStepProps {
  onPrevious: () => void;
  onSubmit: (data: any) => void;
}

export const PriceStep: React.FC<PriceStepProps> = ({
  onPrevious,
  onSubmit,
}) => {
  const formData = useRentFormStore((state) => state.formData);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      price: formData.price,
    },
    resolver: zodResolver(schema),
  });
  console.log(watch("price"));

  const onSubmitStep = (data: any) => {
    setIsLoading(true);

    onSubmit(data);

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitStep)}>
      <StepHeader title="Pick a price for each night" />
      <Input
        type="number"
        label="Price"
        id="price"
        register={register}
        errors={errors}
        value={formData.price}
        onChange={(e) => setValue("price", Number(e.target.value))}
      />
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
          isLoading={isLoading}
          className="mt-3 text-center"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
