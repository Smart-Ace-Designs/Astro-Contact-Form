import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  request: defineAction({
    accept: "form",
    input: z.object({
      firstName: z
        .string({ message: "First name is required" })
        .min(1, { message: "First name is required" }),
      lastName: z
        .string({ message: "Last name is required" })
        .min(1, { message: "Last name is required" }),
      emailAddress: z
        .string({ message: "Email address is required" })
        .min(1, { message: "Email address is required" })
        .email({ message: "A valid email address name is required" }),
      type: z.enum(["support-request", "general-inquiry"], {
        message: "Please select a request type",
      }),
      message: z.string().min(1, { message: "Message text is required" }),
      consent: z
        .boolean()
        .refine((value) => value === true, { message: "Please consent to be contacted" }),
    }),
    handler: async (input) => {
      return input;
    },
  }),
};
