import { db } from "@/app/utils/db";
import getCurrentUser from "@/app/utils/getCurrentUser";
import { NextResponse } from "next/server";
import * as z from "zod";

const schema = z.object({
  listingId: z.string(),
  totalPrice: z.number().min(1),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export async function POST(req: Request) {
  const body = await req.json();
  try {
    schema.parse(body);
    const {
      listingId,
      startDate,
      endDate,
      totalPrice,
    }: z.infer<typeof schema> = body;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const listingAndReservation = await db.listing.update({
      where: {
        id: listingId,
      },
      data: {
        reservations: {
          create: {
            userId: currentUser.id,
            startDate,
            endDate,
            amount: totalPrice,
          },
        },
      },
    });
    return NextResponse.json(listingAndReservation, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
