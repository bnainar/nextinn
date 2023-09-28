import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";
import { z } from "zod";

interface Params {
  reservationId: string;
}
export async function DELETE(_: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const schema = z.object({ reservationId: z.string() });
  const { reservationId } = params;
  try {
    schema.parse(params);
    // People who can delete a reservation
    // - Creator of the reservation
    // - Owner of the listing
    await db.reservation.deleteMany({
      where: {
        id: reservationId,
        OR: [
          { userId: currentUser.id },
          { listing: { userId: currentUser.id } },
        ],
      },
    });
    return NextResponse.json(null, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
