import { EmptyState } from "@/app/components/ui/EmptyState";
import getCurrentUser from "@/app/utils/getCurrentUser";
import getReservations from "@/app/utils/getReservations";
import { ReservationGrid } from "./ReservationGrid";

export default async function ReservationsPage() {
  const user = await getCurrentUser();
  if (!user) return <EmptyState title="Unauthorized" resetButton />;

  const reservations = await getReservations({ ownerId: user.id });
  if (reservations.length === 0)
    return <EmptyState title="No reservations found" />;
  return (
    <ReservationGrid
      currentUser={user}
      reservations={reservations}
      actionLabel="Cancel guest reservations"
    />
  );
}
