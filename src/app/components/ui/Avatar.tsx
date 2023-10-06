"use client";
import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  src?: string | null | undefined;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({
  src = "/images/placeholder.jpg",
  className,
}) => {
  const styles = clsx("rounded-full hidden sm:block", className);
  const [imgSrc, setImgSrc] = useState(src as string);

  return (
    <Image
      className={styles}
      height={30}
      width={30}
      onError={() => setImgSrc("/images/placeholder.jpg")}
      alt="User Avatar"
      src={imgSrc}
    />
  );
};
