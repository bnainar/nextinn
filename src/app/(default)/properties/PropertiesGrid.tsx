"use client";
import { ListingCard } from "@/app/components/ui/listing/ListingCard";
import { Listing, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import toast from "react-hot-toast";

interface PropertiesGridProps {
  listings: Listing[];
  currentUser: User;
}

export const PropertiesGrid: FC<PropertiesGridProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const handleDelete = useCallback(
    (id: string) => {
      setDeletingId(id);
      toast.promise(axios.delete(`/api/listing/${id}`), {
        loading: "Deleting...",
        success: () => {
          setDeletingId("");
          router.refresh();
          return "Listing deleted";
        },
        error: (error) => {
          console.log(error?.response?.data?.error);
          setDeletingId("");

          return "Failed to delete listing";
        },
      });
    },
    [router]
  );
  return (
    <div className="listing-grid">
      {listings.map((l) => (
        <ListingCard
          key={l.id}
          listing={l}
          currentUser={currentUser}
          actionId={l.id}
          actionLabel="Delete listing"
          onAction={handleDelete}
          disabled={deletingId === l.id}
        />
      ))}
    </div>
  );
};
