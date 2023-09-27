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
    return <EmptyState title="No exact matches" resetButton />;
  }
  return (
    <div className="listing-grid">
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
