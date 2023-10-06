import { z } from "zod";

export const listingPUTSchema = z.object({
  category: z.string(),
  title: z.string(),
  desc: z.string(),
  location: z.string().length(2),
  imgURL: z.string().url(),
  guestsLimit: z.number(),
  roomCount: z.number(),
  bathCount: z.number(),
  price: z.number(),
});
