"use client";
import useFav from "@/app/utils/useFav";
import { User } from "@prisma/client";
import clsx from "clsx";
import { FC, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

interface FavButtonProps {
  listingId: string;
  currentUser?: User | null;
}

const FavButton: FC<FavButtonProps> = (props) => {
  const { isFav, toggleFav } = useFav(props);
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    setIsLoading(true);
    await toggleFav(e);
    setIsLoading(false);
  };
  return (
    <div className="hover:scale-90 relative" onClick={onClick}>
      {isLoading ? (
        <AiOutlineLoading size={28} className="animate-spin" fill="white" />
      ) : (
        <>
          <MdOutlineFavoriteBorder
            size={28}
            className="text-white absolute -top-[2px] -right-[2px]"
            fill="white"
          />
          <MdOutlineFavorite
            size={24}
            className={clsx(
              isFav ? "fill-rose-500" : "fill-neutral-500/80 opacity-50"
            )}
          />
        </>
      )}
    </div>
  );
};

export { FavButton };
