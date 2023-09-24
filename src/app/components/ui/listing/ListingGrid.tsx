import { FC } from "react";
import { EmptyState } from "../EmptyState";
import getListings from "@/app/utils/getListings";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { ListingCard } from "./ListingCard";
import { Listing } from "@prisma/client";

interface ListingGridProps {}

const ListingGrid: FC<ListingGridProps> = async ({}) => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return <EmptyState title="No exact matches" resetFilter />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto mt-4 px-6 md:px-16 overflow-x-auto max-w-7xl">
      {listings.map((listing: Listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
};

export { ListingGrid };
