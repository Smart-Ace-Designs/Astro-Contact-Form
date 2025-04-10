import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  request: defineAction({
    accept: "form",
    input: z.object({
      firstName: z
        .string({ message: "This field is required" })
        .min(1, { message: "This field is required" }),
      lastName: z
        .string({ message: "This field is required" })
        .min(1, { message: "This field is required" }),
      emailAddress: z
        .string({ message: "Please enter a valid email address" })
        .min(1, { message: "Please enter a valid email address" })
        .email({ message: "A valid email address name is required" }),
      type: z.enum(["support-request", "general-inquiry"], {
        message: "Please select a query type",
      }),
      message: z
        .string({ message: "This field is required" })
        .min(1, { message: "This field is required" }),
      consent: z
        .string({
          message: "To submit this form, please consent to being contacted",
        })
        .transform((value) => value === "on"),
    }),
    handler: async (input) => {
      return input;
    },
  }),
};
