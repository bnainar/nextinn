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

const DescStep: React.FC<DescStepProps> = ({ onPrevious, onNext }) => {
  const formData = useRentFormStore((state) => state.formData);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: formData.title,
      desc: formData.desc,
    },
    resolver: zodResolver(schema),
  });
  const setFormData = useRentFormStore((state) => state.setFormData);
  const onSubmitStep = (data: any) => {
    console.log("desc step", data);
    setFormData(data);
    onNext(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitStep)}>
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
        value={formData.title}
        onChange={(e) => setValue("title", e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        id="desc"
        register={register}
        errors={errors}
        value={formData.desc}
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

export { DescStep };
