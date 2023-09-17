"use client";
import { FC, useState } from "react";
import { CategoryStep } from "./steps/CategoryStep";
import { LocationStep } from "./steps/LocationStep";
import { Button } from "../../ui/Button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { STEPS, SchemaKeys, schema } from "@/app/types/NewListingTypes";

interface NewListingModalProps {}

type FormValues = z.infer<typeof schema>;

const NewListingModal: FC<NewListingModalProps> = ({}) => {
  const { register, handleSubmit, watch, setValue, formState } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
    });
  const category = watch("category");
  const changeFormValue = (id: SchemaKeys, val: any) => {
    setValue(id, val, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  console.log(formState, category);

  const [step, setStep] = useState(STEPS.CATEGORY);
  const decrementStep = () => {
    setStep((s) => s - 1);
  };
  const incrementStep = () => {
    setStep((s) => s + 1);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    toast.success("Created!");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step == STEPS.CATEGORY && (
        <CategoryStep category={category} changeFormValue={changeFormValue} />
      )}
      {step == STEPS.LOCATION && <LocationStep />}
      <div className="flex flex-row items-end float-right gap-5">
        {step != STEPS.CATEGORY && (
          <Button
            variant="outline"
            width="content"
            type="submit"
            className="mt-3 text-center"
            onClick={decrementStep}
          >
            Prev
          </Button>
        )}
        {step != STEPS.PRICE && (
          <Button
            variant="filled"
            width="content"
            type="submit"
            className="mt-3 text-center"
            onClick={incrementStep}
          >
            Next
          </Button>
        )}
        {step === STEPS.PRICE && (
          <Button
            variant="filled"
            width="content"
            type="submit"
            className="mt-3 text-center"
            onClick={incrementStep}
          >
            Submit
          </Button>
        )}
      </div>
    </form>
  );
};

export { NewListingModal };
