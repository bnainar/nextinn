"use client";
import { FC, useEffect, useState } from "react";
import { CategoryStep } from "./steps/CategoryStep";
import { LocationStep } from "./steps/LocationStep";
import { STEPS } from "@/app/types/NewListingTypes";
import { InfoStep } from "./steps/InfoStep";
import { ImageStep } from "./steps/ImageStep";
import { DescStep } from "./steps/DescStep";
import { PriceStep } from "./steps/PriceStep";
import useRentFormStore, { ListingFormType } from "@/app/stores/rentstore";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCountryByValue } from "@/app/utils/countries";

interface ListingWizardProps {
  isUpdate?: boolean;
  listing?: ListingFormType;
  updateId?: string;
}

export const ListingWizard: FC<ListingWizardProps> = ({
  isUpdate,
  listing,
  updateId,
}) => {
  const router = useRouter();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const formData = useRentFormStore((state) => state.formData);
  const setFormData = useRentFormStore((state) => state.setFormData);
  const setForm = useRentFormStore((state) => state.setForm);

  useEffect(() => {
    if (isUpdate && listing) {
      const existingListingData = {
        ...listing,
        location: getCountryByValue(listing.location) ?? "",
      };

      setForm(existingListingData);
    }
  }, [isUpdate, setForm, listing]);

  const handleNext = (data?: any) => {
    if (data) setFormData(data);
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = (data: any) => {
    setFormData(data);
    const location = formData.location.value;

    const body = { ...formData, ...data, location };
    // console.log("final", body);
    const promise = isUpdate
      ? axios.put("/api/listing/" + updateId, body)
      : axios.post("/api/listing", body);
    toast.promise(promise, {
      loading: "Updating listing...",
      success: ({ data }) => {
        console.log(data);
        setForm();
        router.push("/properties");
        return "Your listing is updated";
      },
      error: "Unable to update listing",
    });
  };

  return (
    <div className="max-w-lg m-auto mt-10">
      <details className="text-xs font-mono absolute bottom-10 left-2 -z-50 h-48 w-[40vw] overflow-scroll hidden">
        <pre>
          <summary>FormData</summary>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </details>

      {step == STEPS.CATEGORY && (
        <CategoryStep onNext={handleNext} data={listing?.category} />
      )}
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
