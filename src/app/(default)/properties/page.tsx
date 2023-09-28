import { EmptyState } from "@/app/components/ui/EmptyState";
import getCurrentUser from "@/app/utils/getCurrentUser";
import getListings from "@/app/utils/getListings";
import { PropertiesGrid } from "./PropertiesGrid";

export default async function TripsPage() {
  const user = await getCurrentUser();
  if (!user) return <EmptyState title="Unauthorized" resetButton />;

  const listings = await getListings({ userId: user.id });
  if (listings.length === 0)
    return (
      <EmptyState
        title="No trips found"
        resetButton
        resetLabel="Explore listings"
      />
    );
  return <PropertiesGrid listings={listings} currentUser={user} />;
}
