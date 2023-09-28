"use client";
import { ListingCard } from "@/app/components/ui/listing/ListingCard";
import { Listing, Reservation, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import toast from "react-hot-toast";

type ReservationAndListing = Reservation & { listing: Listing };

interface ReservationGridProps {
  currentUser: User;
  reservations: ReservationAndListing[];
  actionLabel: string;
}

const ReservationGrid: FC<ReservationGridProps> = ({
  currentUser,
  reservations,
  actionLabel,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservation/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          console.log(error?.response?.data?.error);

          toast.error("Failed to cancel reservation");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <div className="listing-grid">
      {reservations.map((r) => (
        <ListingCard
          key={r.id}
          listing={r.listing}
          reservation={r}
          actionId={r.id}
          actionLabel={actionLabel}
          onAction={onCancel}
          disabled={r.id === deletingId}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
};

export { ReservationGrid };
