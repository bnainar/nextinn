import { db } from "./db";

export default async function getListingById({
  listingId,
}: {
  listingId: string;
}) {
  try {
    return await db.listing.findUnique({
      where: { id: listingId },
      include: { user: true },
    });
  } catch (error: any) {
    console.log("cant fetch listings", error);
    throw new Error(error);
  }
}
