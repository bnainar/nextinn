import * as z from "zod";
export const schema = z.object({
  category: z.string().min(1, { message: "Select any category" }),
  location: z.any(),
  roomCount: z.number().positive(),
  bathCount: z.number().positive(),
  guestsLimit: z.number().positive(),
  price: z.number().positive(),
});
export type SchemaKeys =
  | "category"
  | "location"
  | "roomCount"
  | "bathCount"
  | "guestsLimit"
  | "imageSrc"
  | "price";
export enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESC = 4,
  PRICE = 5,
}
