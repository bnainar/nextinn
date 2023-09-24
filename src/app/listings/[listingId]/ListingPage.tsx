import { categories } from "@/app/components/categories/categories";
import { Listing, User } from "@prisma/client";
import { FC, useMemo } from "react";
import { ListingHeader } from "./components/ListingHeader";
import { ListingInfo } from "./components/ListingInfo";

interface ListingPageProps {
  listing: Listing & { user: User };
  currentUser: User;
}

const ListingPage: FC<ListingPageProps> = ({ listing, currentUser }) => {
  const category = useMemo(
    () => categories.find((c) => c.label === listing.category),
    [listing]
  );
  return (
    <div className="mx-auto mt-4 px-6 md:px-16 overflow-x-auto max-w-7xl">
      <div className="flex flex-col gap-6">
        <ListingHeader
          id={listing.id}
          title={listing.title}
          imgURL={listing.imgURL}
          price={listing.price}
          location={listing.location}
          currentUser={currentUser}
        />
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10">
          <ListingInfo
            user={listing.user}
            category={category}
            desc={listing.desc}
            roomCount={listing.roomCount}
            bathCount={listing.bathCount}
            guestsLimit={listing.guestsLimit}
            location={listing.location}
          />
        </div>
      </div>
    </div>
  );
};

export { ListingPage };
