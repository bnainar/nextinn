import { Container } from "@/app/components/ui/Container";
import { EmptyState } from "@/app/components/ui/EmptyState";
import getCurrentUser from "@/app/utils/getCurrentUser";
import getReservations from "@/app/utils/getReservations";
import { TripsGrid } from "./TripsGrid";

export default async function TripsPage() {
  const user = await getCurrentUser();
  if (!user) return <EmptyState title="Unauthorized" resetButton />;

  const reservations = await getReservations({ userId: user.id });
  if (reservations.length === 0)
    return <EmptyState title="No trips found" resetButton />;
  return <TripsGrid currentUser={user} reservations={reservations} />;
}
