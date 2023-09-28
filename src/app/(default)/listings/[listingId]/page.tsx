import { NavBar } from "@/app/components/navbar/NavBar";
import { EmptyState } from "@/app/components/ui/EmptyState";
import getListingById from "@/app/utils/getListingById";
import { ListingPage } from "./ListingPage";
import getCurrentUser from "@/app/utils/getCurrentUser";
import getReservations from "@/app/utils/getReservations";

interface IParams {
  listingId: string;
}

export default async function Page({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing)
    return (
      <EmptyState
        title="Listing not found"
        subtitle="The listing may not exist. Try checking the listing id"
        resetButton
        resetLabel="Explore more listings"
      />
    );

  return (
    <ListingPage
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
}
