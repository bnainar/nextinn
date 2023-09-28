import { db } from "./db";
interface Params {
  listingId?: string;
  userId?: string;
  ownerId?: string;
}
export default async function getReservations({
  listingId,
  userId,
  ownerId,
}: Params) {
  try {
    const query: any = {};

    if (listingId) query.listingId = listingId;

    if (userId) query.userId = userId;

    if (ownerId) query.listing = { userId: ownerId };
    const reservations = await db.reservation.findMany({
      where: query,
      include: { listing: true },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reservations;
  } catch (error: any) {
    console.log("cant fetch listings", error);
    throw new Error(error);
  }
}
