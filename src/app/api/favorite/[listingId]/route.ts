import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";

type FavParams = {
  listingId?: string;
};
export async function POST(_: Request, { params }: { params: FavParams }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json("Unauthorized", { status: 401 });

  const { listingId } = params;
  // check if its actually a string
  if (!listingId || typeof listingId !== "string")
    return NextResponse.json("Bad Request", { status: 400 });

  const newFavIds = [...(user.favIds ?? [])];
  newFavIds.push(listingId);
  const newUser = await db.user.update({
    where: {
      id: user.id,
    },
    data: { favIds: newFavIds },
  });
  return NextResponse.json("favorited", { status: 200 });
}
export async function DELETE(_: Request, { params }: { params: FavParams }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json("Unauthorized", { status: 401 });

  const { listingId } = params;
  // check if its actually a string
  if (
    !listingId ||
    typeof listingId !== "string" ||
    !user.favIds ||
    user.favIds.length === 0
  )
    return NextResponse.json("Bad Request", { status: 400 });

  const newFavIds = user.favIds.filter((id) => id !== listingId);

  const newUser = await db.user.update({
    where: {
      id: user.id,
    },
    data: { favIds: newFavIds },
  });
  return NextResponse.json("unfavorited", { status: 200 });
}
