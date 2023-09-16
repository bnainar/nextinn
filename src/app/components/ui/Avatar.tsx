import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  src: string | null | undefined;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, className }) => {
  const styles = clsx("rounded-full hidden sm:block", className);
  return (
    <Image
      className={styles}
      height={30}
      width={30}
      alt="User Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export { Avatar };
