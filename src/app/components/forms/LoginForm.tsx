"use client";
import { FC } from "react";
import toast from "react-hot-toast";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { MdLogin } from "react-icons/md";
import { SocialLogin } from "./SocialLogin";

interface LoginFormProps {}

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
});

type FormValues = z.infer<typeof schema>;

const LoginForm: FC<LoginFormProps> = ({}) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   resolver: zodResolver(schema),
  // });
  // const onLogin: SubmitHandler<FormValues> = (data) => {
  //   console.log(data);
  //   toast.success("Logged In");
  // };
  return (
    // <form onSubmit={handleSubmit(onLogin)}>
    <div>
      <div className="mb-3">
        <div className="font-bold text-2xl text-slate-800">
          Welcome to NextInn_
        </div>
        <div className="text-neutral-700">Find your next stay with us</div>
      </div>
      {/* <Input
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
      </Button> */}
      <SocialLogin />
    </div>
  );
};

export { LoginForm };
