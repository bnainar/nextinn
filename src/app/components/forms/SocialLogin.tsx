import { FC } from "react";
import { Button } from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

interface SocialLoginProps {}

const SocialLogin: FC<SocialLoginProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4 my-4 pt-4">
      <Button
        variant="outline"
        type="submit"
        width="full"
        icon={<FcGoogle fontSize="1.25rem" />}
        onClick={() => console.log("hi")}
      >
        Login with Google
      </Button>
      <Button
        variant="outline"
        type="submit"
        width="full"
        icon={<AiFillGithub fontSize="1.25rem" />}
      >
        Login with GitHub
      </Button>
    </div>
  );
};

export { SocialLogin };
