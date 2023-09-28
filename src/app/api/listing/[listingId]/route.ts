import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";
import { z } from "zod";

interface IParams {
  listingId: string;
}

export async function DELETE(_: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const schema = z.object({ listingId: z.string() });
  const { listingId } = params;
  try {
    schema.parse(params);
    await db.listing.deleteMany({
      where: { id: listingId, userId: currentUser.id },
    });
    return NextResponse.json(null, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
