"use client";
import { FC, useState } from "react";
import { CategoryStep } from "./steps/CategoryStep";
import { LocationStep } from "./steps/LocationStep";
import { Button } from "../../ui/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { STEPS, SchemaKeys } from "@/app/types/NewListingTypes";
import { InfoStep } from "./steps/InfoStep";
import { ImageStep } from "./steps/ImageStep";

interface NewListingModalProps {}

const NewListingModal: FC<NewListingModalProps> = ({}) => {
  const { handleSubmit, setValue, watch, formState, reset } =
    useForm<FieldValues>({
      defaultValues: {
        category: "",
        location: null,
        guestsLimit: 1,
        roomCount: 1,
        bathCount: 1,
        imageSrc: "",
        price: 1,
        title: "",
        description: "",
      },
    });
  const category = watch("category");
  const location = watch("location");
  const roomInfo = {
    guest: watch("guestsLimit"),
    room: watch("roomCount"),
    bathroom: watch("bathCount"),
  };
  const changeFormValue = (id: SchemaKeys, val: any) => {
    setValue(id, val, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  console.log(formState, category, location);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const [step, setStep] = useState(STEPS.CATEGORY);
  const decrementStep = () => {
    setStep((s) => s - 1);
  };
  const incrementStep = () => {
    setStep((s) => s + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step == STEPS.CATEGORY && (
        <CategoryStep category={category} changeFormValue={changeFormValue} />
      )}
      {step == STEPS.LOCATION && (
        <LocationStep
          location={location}
          onChange={(val) => changeFormValue("location", val)}
        />
      )}
      {step == STEPS.INFO && (
        <InfoStep roomInfo={roomInfo} changeFormValue={changeFormValue} />
      )}
      {step == STEPS.IMAGES && <ImageStep />}
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
