"use client";
import { categories } from "@/app/components/categories/categories";
import { Listing, Reservation, User } from "@prisma/client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { Range } from "react-date-range";
import { ListingHeader } from "./components/ListingHeader";
import { ListingInfo } from "./components/ListingInfo";
import { useLoginStore } from "@/app/stores/loginModalStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { ListingReservation } from "./components/ListingReservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingPageProps {
  listing: Listing & { user: User };
  currentUser?: User | null;
  reservations?: Reservation[];
}

const ListingPage: FC<ListingPageProps> = ({
  listing,
  currentUser,
  reservations = [],
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [noOfDays, setNoOfDays] = useState(1);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const login = useLoginStore((s) => s.handleLoginModalChange);
  const router = useRouter();
  const category = useMemo(
    () => categories.find((c) => c.label === listing.category),
    [listing]
  );
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const days = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      setNoOfDays(days);

      if (days && listing.price) {
        setTotalPrice(days * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const dateRange = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...dateRange];
    });

    return dates;
  }, [reservations]);

  const handleNewReservation = useCallback(() => {
    if (!currentUser) {
      login(true);
      return;
    }
    setIsLoading(true);
    const data = {
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: listing.id,
    };
    axios
      .post("/api/reservation", data)
      .then(() => {
        toast.success("Listing reserved!");
        setDateRange(initialDateRange);
        router.push("/trips");
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [
    currentUser,
    login,
    setIsLoading,
    totalPrice,
    dateRange,
    router,
    listing.id,
  ]);
  return (
    <div className="mx-auto mt-4 px-6 md:px-16 overflow-x-auto max-w-7xl">
      <div className="flex flex-col gap-6">
        <ListingHeader
          id={listing.id}
          title={listing.title}
          imgURL={listing.imgURL}
          price={listing.price}
          location={listing.location}
          currentUser={currentUser}
        />
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10">
          <ListingInfo
            user={listing.user}
            category={category}
            desc={listing.desc}
            roomCount={listing.roomCount}
            bathCount={listing.bathCount}
            guestsLimit={listing.guestsLimit}
            location={listing.location}
          />
          <div className="order-first mb-10 md:order-last md:col-span-3">
            <ListingReservation
              price={listing.price}
              totalPrice={totalPrice}
              dateRange={dateRange}
              noOfDays={noOfDays}
              onChangeDate={(val) => setDateRange(val)}
              onSubmit={handleNewReservation}
              disabled={isLoading}
              disabledDates={disabledDates}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListingPage };
