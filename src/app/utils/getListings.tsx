import { db } from "./db";

interface IParams {
  userId?: string;
}
export default async function getListings({ userId }: IParams) {
  try {
    let query: any = {};

    if (userId) query.userId = userId;

    return await db.listing.findMany({
      where: query,
      orderBy: { createdAt: "desc" },
    });
  } catch (error: any) {
    console.log("cant fetch listings", error);
    throw new Error(error);
  }
}
