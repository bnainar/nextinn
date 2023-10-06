import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";
import { listingPUTSchema } from "./postSchema";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const listing = listingPUTSchema.parse(body);

    await db.listing.create({
      data: {
        ...listing,
        userId: currentUser.id,
      },
    });
    return NextResponse.json(null, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
