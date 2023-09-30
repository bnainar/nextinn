"use client";
import { categories } from "@/app/components/categories/categories";
import { useForm, FieldValues } from "react-hook-form";
import { FC } from "react";
import { CategoryCardSelect } from "../ui/CategoryCardSelect";
import { StepHeader } from "../ui/StepHeader";
import useRentFormStore from "@/app/stores/rentstore";
import { Button } from "@/app/components/ui/Button";

interface CategoryStepProps {
  onNext: (data: any) => void;
}
// setFormData({ category: label })
const CategoryStep: FC<CategoryStepProps> = ({ onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const { handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      category: formData.category,
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onNext)} className="mb-3">
        <StepHeader
          title="Which of these best describe your place?"
          subtitle="Pick a category"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-5">
          {categories.map((c) => (
            <CategoryCardSelect
              key={c.label}
              data={c}
              selected={watch("category") === c.label}
              handleSelect={(label) => setValue("category", label)}
            />
          ))}
        </div>
        <div className="flex flex-row items-end float-right gap-5">
          <Button
            variant="filled"
            width="content"
            type="submit"
            className="mt-3 text-center"
            disabled={watch("category") === ""}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export { CategoryStep };
