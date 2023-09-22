"use client";
import { getCountryByValue } from "@/app/utils/countries";
import { Listing, Reservation, User } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useCallback, useMemo } from "react";
import { FavButton } from "./FavButton";
import { Button } from "../Button";

interface ListingCardProps {
  listing: Listing;
  reservation?: Reservation;
  onAction?: (actionId: string) => void;
  actionLabel?: string;
  actionId?: string;
  currentUser?: User | null;
  disabled?: boolean;
}

const ListingCard: FC<ListingCardProps> = ({
  listing,
  reservation,
  onAction,
  actionLabel,
  actionId = "",
  currentUser,
  disabled,
}) => {
  const router = useRouter();
  const location = getCountryByValue(listing.location);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) return;
      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );
  // choosing which price to display
  const price = useMemo(
    () => reservation?.amount || listing.price,
    [reservation, listing]
  );
  // if we are displaying these listings as a reserveration, include the start and end date of the reservation
  const reservationDates = useMemo(() => {
    if (!reservation) return;
    const start = reservation.startDate,
      end = reservation.endDate;
    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${listing.id}`)}
      className="col-span-1 cursor-pointer group min-w-full"
    >
      <div className="flex flex-col w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className=" object-cover h-full w-full "
            src={listing.imgURL}
            alt="Listing"
          />
          <div className="absolute top-3 right-3">
            <FavButton listingId={listing.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg mt-4">
          {location?.region}, {location?.label}
        </div>
        <div className="text-neutral-600">
          {reservationDates ?? listing.category}
        </div>
        <p>
          <span className="font-semibold">$ {price}</span>
          {!reservation && <span className="text-neutral-700 pl-1">night</span>}
        </p>
        {onAction && actionLabel && (
          <Button variant="filled" width="full" onClick={handleCancel}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export { ListingCard };
