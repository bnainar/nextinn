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

const CategoryStep: FC<CategoryStepProps> = ({ onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      category: formData.category,
    },
  });
  const setFormData = useRentFormStore((state) => state.setFormData);
  const onSubmitStep = (data: any) => {
    onNext(data);
  };
  const category = formData.category;
  // const category = watch("category");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitStep)} className="mb-3">
        <StepHeader
          title="Which of these best describe your place?"
          subtitle="Pick a category"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-5">
          {categories.map((c) => (
            <CategoryCardSelect
              key={c.label}
              data={c}
              selected={category === c.label}
              handleSelect={(label) => setFormData({ category: label })}
            />
          ))}
        </div>
        <div className="flex flex-row items-end float-right gap-5">
          <Button
            variant="filled"
            width="content"
            type="submit"
            className="mt-3 text-center"
            disabled={formData.category === ""}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export { CategoryStep };
