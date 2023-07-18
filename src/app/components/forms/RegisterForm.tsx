"use client";
import { FC } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useStore } from "@/app/stores";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import * as z from "zod";
import { SocialLogin } from "./SocialLogin";

interface RegisterFormProps {}

const schema = z.object({
  name: z.string().min(3, { message: "Should be atleast 3 chars" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(8, { message: "Should be atleast 8 chars" }),
});

type FormValues = z.infer<typeof schema>;

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const setOpenLogin = useStore((s) => s.setOpenLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const handleRegister: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    toast.success("Registered");
  };
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Input
        label="Name"
        type="text"
        {...register("name")}
        errors={errors.name}
      />
      <Input
        label="Email"
        type="text"
        {...register("email")}
        errors={errors.email}
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        errors={errors.password}
      />
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center ">
        <span className="text-neutral-700">
          Already have an account?
          <button
            onClick={() => setOpenLogin(true)}
            className="ml-1 underline decoration-slate-400 hover:underline-offset-2 font-semibold text-neutral-800 cursor-pointer"
          >
            Login
          </button>
        </span>

        <Button
          variant="filled"
          type="submit"
          width="content"
          className="grow sm:grow-0"
        >
          Register
        </Button>
      </div>
      <SocialLogin />
    </form>
  );
};

export { RegisterForm };
