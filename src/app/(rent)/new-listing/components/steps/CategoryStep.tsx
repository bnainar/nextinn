"use client";
import { categories } from "@/app/components/categories/categories";
import { FC, FormEvent, FormEventHandler, useState } from "react";
import { CategoryCardSelect } from "../ui/CategoryCardSelect";
import { StepHeader } from "../ui/StepHeader";
import { Button } from "@/app/components/ui/Button";

interface CategoryStepProps {
  onNext: (data: any) => void;
  data?: string | null;
}
export const CategoryStep: FC<CategoryStepProps> = ({ onNext, data }) => {
  const [category, setCategory] = useState(data ?? "");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext({ category });
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <StepHeader
        title="Which of these best describe your place?"
        subtitle="Pick a category"
      />

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-5">
        {categories.map((c) => (
          <CategoryCardSelect
            key={c.label}
            data={c}
            selected={c.label === category}
            handleSelect={(label) => setCategory(label)}
          />
        ))}
      </div>
      <div className="flex flex-row items-end float-right gap-5">
        <Button
          variant="filled"
          width="content"
          type="submit"
          className="mt-3 text-center"
          disabled={category === ""}
        >
          Next
        </Button>
      </div>
    </form>
  );
};
