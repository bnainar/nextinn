import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  try {
    const listing = await db.listing.create({
      data: {
        ...body,
        location: body.location.value,
        price: parseInt(body.price, 10),
        userId: currentUser.id,
      },
    });
    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
