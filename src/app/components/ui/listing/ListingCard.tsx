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
  edit?: boolean;
}

export const ListingCard: FC<ListingCardProps> = ({
  listing,
  reservation,
  onAction,
  actionLabel,
  actionId = "",
  currentUser,
  disabled,
  edit,
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
        <div className="text-neutral-900 font-medium text-xl mt-4">
          {location?.region}, {location?.label}
        </div>
        <div className="text-neutral-600 text-lg">
          {reservationDates ?? listing.category}
        </div>
        <p className="mb-2">
          <span className="font-semibold text-lg">$ {price}</span>
          {!reservation && (
            <span className="text-neutral-600 pl-1 text-lg">night</span>
          )}
        </p>
        {onAction && actionLabel && (
          <div className="p-2 flex justify-between">
            {edit && (
              <Button
                variant="outline"
                width="content"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  router.push(`/update-listing/${actionId}`);
                }}
              >
                Edit
              </Button>
            )}
            <Button
              variant="outline"
              width="content"
              onClick={handleCancel}
              isLoading={disabled}
              className="text-red-500 border-red-500"
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
