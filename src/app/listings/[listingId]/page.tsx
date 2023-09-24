import { NavBar } from "@/app/components/navbar/NavBar";
import { EmptyState } from "@/app/components/ui/EmptyState";
import getListingById from "@/app/utils/getListingById";
import { ListingPage } from "./ListingPage";
import getCurrentUser from "@/app/utils/getCurrentUser";

interface Props {
  listingId: string;
}

export default async function Page({ params }: { params: Props }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing)
    return (
      <>
        <NavBar />
        <EmptyState
          title="Listing not found"
          subtitle="The listing may not exist. Try checking the listing id"
          resetButton
          resetLabel="Explore more listings"
        />
      </>
    );

  return (
    <>
      <NavBar />
      <ListingPage listing={listing} currentUser={currentUser} />
    </>
  );
}
