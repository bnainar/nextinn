import { Input } from "@/app/components/ui/Input";
import { StepHeader } from "../ui/StepHeader";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";
import useRentFormStore from "@/app/stores/rentstore";
import { Button } from "@/app/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const schema = z.object({ price: z.number().gt(0).lt(1000) });
interface PriceStepProps {
  onPrevious: () => void;
}

const PriceStep: React.FC<PriceStepProps> = ({ onPrevious }) => {
  const formData = useRentFormStore((state) => state.formData);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      price: formData.price,
    },
    resolver: zodResolver(schema),
  });
  const setFormData = useRentFormStore((state) => state.setFormData);
  const onSubmitStep = (price: any) => {
    setFormData({ price });
    console.log("Done!", formData);
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
          className="mt-3 text-center"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export { PriceStep };
