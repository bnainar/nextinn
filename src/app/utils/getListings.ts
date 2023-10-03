import { db } from "./db";

interface IParams {
  userId?: string;
  category?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  guestsLimit?: number;
  roomCount?: number;
  bathCount?: number;
}
export default async function getListings({
  userId,
  category,
  location,
  startDate,
  endDate,
  guestsLimit,
  roomCount,
  bathCount,
}: IParams) {
  try {
    let query: any = {};

    if (userId) query.userId = userId;
    if (category) query.category = category;
    if (roomCount)
      query.roomCount = {
        gte: Number(roomCount),
      };
    if (guestsLimit)
      query.guestsLimit = {
        gte: Number(guestsLimit),
      };
    if (bathCount)
      query.bathCount = {
        gte: Number(bathCount),
      };
    if (location) query.location = location;

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    return await db.listing.findMany({
      where: query,
      orderBy: { createdAt: "desc" },
    });
  } catch (error: any) {
    console.log("cant fetch listings", error);
    throw new Error(error);
  }
}
