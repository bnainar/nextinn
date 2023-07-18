"use client";
import { FC } from "react";
import { Input } from "../ui/Input";
import { useStore } from "@/app/stores";
import { Button } from "../ui/Button";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SocialLogin } from "./SocialLogin";

interface LoginFormProps {}

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(8, { message: "Should be atleast 8 chars" }),
});

type FormValues = z.infer<typeof schema>;

const LoginForm: FC<LoginFormProps> = ({}) => {
  const setopenRegister = useStore((s) => s.setOpenRegister);
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
            New to NextInn?
            <button
              onClick={() => setopenRegister(true)}
              className="ml-1 underline decoration-slate-400 font-semibold text-neutral-800 cursor-pointer"
            >
              Register
            </button>
          </span>

          <Button variant="filled" type="submit" width="content">
            Login
          </Button>
        </div>
        <SocialLogin />
      </form>
    </>
  );
};

export { LoginForm };
