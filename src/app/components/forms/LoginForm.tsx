"use client";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/Button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <div>
      <div className="mb-3">
        <div className="font-bold text-2xl text-slate-800">
          Welcome to NextInn_
        </div>
        <div className="text-neutral-700">Find your next stay with us</div>
      </div>
      <div className="flex flex-col gap-4 my-4 pt-4">
        <Button
          variant="outline"
          type="submit"
          width="full"
          hasIcon={true}
          icon={<FcGoogle fontSize="1.25rem" />}
          onClick={() => signIn("google")}
        >
          Login with Google
        </Button>
        <Button
          variant="outline"
          type="submit"
          width="full"
          hasIcon={true}
          icon={<AiFillGithub fontSize="1.25rem" />}
          onClick={() => signIn("github")}
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
};

export { LoginForm };
