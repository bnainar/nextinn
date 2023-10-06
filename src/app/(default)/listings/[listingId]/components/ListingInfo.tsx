import { FC } from "react";
import dynamic from "next/dynamic";
import { User } from "@prisma/client";
import { Avatar } from "@/app/components/ui/Avatar";
import { ListingCategory } from "./ListingCategory";
import { getCountryByValue } from "@/app/utils/countries";
import { Category } from "@/app/components/categories/categories";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: User;
  category?: Category;
  desc: string;
  roomCount: number;
  bathCount: number;
  guestsLimit: number;
  location: string;
}

export const ListingInfo: FC<ListingInfoProps> = ({
  user,
  category,
  desc,
  roomCount,
  bathCount,
  guestsLimit,
  location,
}) => {
  const coords = getCountryByValue(location)?.latlng;

  return (
    <div className="col-span-5 flex flex-col gap-8 mb-10">
      <div className="flex justify-between pb-2">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold">Hosted by {user.name}</div>
          <div className="flex items-center gap-2 text-neutral-500">
            <span>{guestsLimit} guests</span>
            <span>·</span>
            <span>{roomCount} rooms</span>
            <span>·</span>
            <span>{bathCount} bathrooms</span>
          </div>
        </div>
        <Avatar src={user.image} className="h-14 w-14" />
      </div>
      <hr />
      <ListingCategory category={category} />
      <hr />
      <p className="text-base text-neutral-700">{desc}</p>
      <hr />
      <Map center={coords} />
    </div>
  );
};
