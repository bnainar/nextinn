import { EmptyState } from "@/app/components/ui/EmptyState";
import { ListingWizard } from "../../new-listing/components/ListingWizard";
import getListingById from "@/app/utils/getListingById";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { ListingFormType } from "@/app/stores/rentstore";

interface IParams {
  listingId: string;
}

export default async function Page({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing || currentUser?.id != listing.user.id)
    return (
      <EmptyState
        title="Listing not found"
        subtitle="The listing may not exist. Try checking the listing id"
        resetButton
        resetLabel="Explore more listings"
      />
    );
  const newListing: ListingFormType = {
    category: listing.category,
    title: listing.title,
    desc: listing.desc,
    location: listing.location,
    imgURL: listing.imgURL,
    guestsLimit: listing.guestsLimit,
    roomCount: listing.roomCount,
    bathCount: listing.bathCount,
    price: listing.price,
  };
  return <ListingWizard isUpdate listing={newListing} />;
}
