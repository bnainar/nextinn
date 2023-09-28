"use client";
import { ListingCard } from "@/app/components/ui/listing/ListingCard";
import { Listing, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import toast from "react-hot-toast";

interface PropertiesGridProps {
  listings: Listing[] | null;
  currentUser: User;
}

const PropertiesGrid: FC<PropertiesGridProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const handleDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listing/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          console.log(error?.response?.data?.error);

          toast.error("Failed to delete listing");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <div className="listing-grid">
      {listings?.map((l) => (
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

export { PropertiesGrid };
