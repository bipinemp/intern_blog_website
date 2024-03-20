import { z } from "zod";

export const conatactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "You must enter a Name" }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "You must enter a Email" })
    .email(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "You must enter a Message" })
    .min(10, { message: "Message should be atLeast 10 characters long" }),
});

export type TConatactSchema = z.infer<typeof conatactSchema>;
