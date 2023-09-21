import { Listing, Reservation, User } from "@prisma/client";
// convert the Date Prisma type to typescript string
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};
