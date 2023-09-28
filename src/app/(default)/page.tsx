import { CategoriesList } from "../components/categories/CategoriesList";
import { Container } from "../components/ui/Container";
import getListings from "../utils/getListings";
import getCurrentUser from "../utils/getCurrentUser";
import { EmptyState } from "../components/ui/EmptyState";
import { Listing } from "@prisma/client";
import { ListingCard } from "../components/ui/listing/ListingCard";

interface ISearchParams {
  userId?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return <EmptyState title="No exact matches" resetButton />;
  }
  return (
    <main>
      <Container>
        <CategoriesList />
        <div className="listing-grid">
          {listings.map((listing: Listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
