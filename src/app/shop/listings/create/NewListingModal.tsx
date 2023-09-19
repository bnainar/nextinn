"use client";
import { FC, useState } from "react";
import { CategoryStep } from "./steps/CategoryStep";
import { LocationStep } from "./steps/LocationStep";
import { STEPS } from "@/app/types/NewListingTypes";
import { InfoStep } from "./steps/InfoStep";
import { ImageStep } from "./steps/ImageStep";
import { DescStep } from "./steps/DescStep";
import { PriceStep } from "./steps/PriceStep";
import useRentFormStore from "@/app/stores/rentstore";
import toast from "react-hot-toast";

import axios from "axios";
import { useRouter } from "next/navigation";

interface NewListingModalProps {}

const NewListingModal: FC<NewListingModalProps> = ({}) => {
  const router = useRouter();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const formData = useRentFormStore((state) => state.formData);
  const resetForm = useRentFormStore((state) => state.resetForm);

  const handleNext = (data: any) => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const onSubmit = () => {
    axios
      .post("/api/listing", formData)
      .then(() => {
        toast.success("Listing created!");
        resetForm();
        router.push("/");
      })
      .catch(() => {
        toast.error("Failed to create a listing");
        console.error("Failed to create a listing");
      });
  };

  return (
    <div className="max-w-lg m-auto mt-10">
      <pre className="text-xs font-mono">
        {JSON.stringify(formData, null, 2)}
      </pre>

      {step == STEPS.CATEGORY && <CategoryStep onNext={handleNext} />}
      {step == STEPS.LOCATION && (
        <LocationStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {step == STEPS.INFO && (
        <InfoStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {step == STEPS.IMAGES && (
        <ImageStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {step == STEPS.DESC && (
        <DescStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {step == STEPS.PRICE && (
        <PriceStep onPrevious={handlePrevious} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export { NewListingModal };
