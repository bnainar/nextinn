import { FC } from "react";
import { Button } from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

interface SocialLoginProps {}

const SocialLogin: FC<SocialLoginProps> = ({}) => {
  return (
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
  );
};

export { SocialLogin };
