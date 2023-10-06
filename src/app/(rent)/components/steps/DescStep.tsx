import { Input } from "@/app/components/ui/Input";
import { StepHeader } from "../ui/StepHeader";
import { FieldValues, useForm } from "react-hook-form";
import useRentFormStore from "@/app/stores/rentstore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/ui/Button";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(3, { message: "Must be atleast 3 chars long" }),
  desc: z.string().min(3, { message: "Must be atleast 3 chars long" }),
});

interface DescStepProps {
  onPrevious: () => void;
  onNext: (data: any) => void;
}

export const DescStep: React.FC<DescStepProps> = ({ onPrevious, onNext }) => {
  const title = useRentFormStore((state) => state.formData.title);
  const desc = useRentFormStore((state) => state.formData.desc);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title,
      desc,
    },
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <StepHeader
        title="How'd you name your place?"
        subtitle="Keep it memorable!"
      />
      <Input
        label="Title"
        type="text"
        id="title"
        register={register}
        errors={errors}
        value={title}
        onChange={(e) => setValue("title", e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        id="desc"
        register={register}
        errors={errors}
        value={desc}
        onChange={(e) => setValue("desc", e.target.value)}
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
          className="mt-3 text-center"
        >
          Next
        </Button>
      </div>
    </form>
  );
};
