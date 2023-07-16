import { FC } from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  src: string;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, className }) => {
  const styles = clsx("rounded-full hidden sm:block", className);
  return (
    <RadixAvatar.Root>
      <RadixAvatar.Image asChild>
        <Image
          className={styles}
          height={30}
          width={30}
          alt="User Avatar"
          src={src}
        />
      </RadixAvatar.Image>
      <RadixAvatar.Fallback asChild>
        <Image
          className={styles}
          height={30}
          width={30}
          alt="User Avatar"
          src="/images/placeholder.jpg"
        />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export { Avatar };
