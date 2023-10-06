import { FavButton } from "@/app/components/ui/listing/FavButton";
import { getCountryByValue } from "@/app/utils/countries";
import { User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";

interface ListingHeaderProps {
  id: string;
  title: string;
  imgURL: string;
  location: string;
  price: number;
  currentUser?: User | null;
}

export const ListingHeader: FC<ListingHeaderProps> = ({
  id,
  title,
  imgURL,
  location,
  currentUser,
}) => {
  const country = getCountryByValue(location);
  return (
    <main>
      <h2 className="text-2xl text-neutral-900 font-medium">{title}</h2>
      <p>{`${country?.label}, ${country?.region}`}</p>
      <div className="relative w-full h-[60vh] my-5 overflow-hidden rounded-lg">
        <Image
          alt={`Cover Image of ${title}`}
          src={imgURL}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <FavButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </main>
  );
};
