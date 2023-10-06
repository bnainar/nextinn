import { EmptyState } from "@/app/components/ui/EmptyState";
import { ListingCard } from "@/app/components/ui/listing/ListingCard";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { getFavorites } from "@/app/utils/getFavorites";

export default async function FavPage() {
  const user = await getCurrentUser();
  if (!user) return <EmptyState title="Unauthorized" resetButton />;

  const listings = await getFavorites();
  if (!listings || listings.length === 0)
    return (
      <EmptyState
        title="No trips found"
        resetButton
        resetLabel="Explore listings"
      />
    );
  return (
    <div className="listing-grid">
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} currentUser={user} />
      ))}
    </div>
  );
}
