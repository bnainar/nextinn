"use client";
import { FC } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SocialLogin } from "./SocialLogin";
import { MdLogin } from "react-icons/md";

interface LoginFormProps {}

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(8, { message: "Should be atleast 8 chars" }),
});

type FormValues = z.infer<typeof schema>;

const LoginForm: FC<LoginFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleLogin: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    toast.success("Logged In");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <div className="font-bold text-2xl text-slate-800">
            Welcome to NextInn
          </div>
          <div className="text-neutral-700">Find your next stay with us</div>
        </div>
        <Input
          label="Email"
          type="text"
          {...register("email")}
          errors={errors.email}
        />

        <Button
          variant="filled"
          type="submit"
          width="full"
          icon={<MdLogin />}
          className="mt-3"
        >
          Login
        </Button>
        <SocialLogin />
      </form>
    </>
  );
};

export { LoginForm };
