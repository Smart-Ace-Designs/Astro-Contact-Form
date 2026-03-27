import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
  request: defineAction({
    accept: "form",
    input: z.object({
      firstName: z
        .string({ error: "This field is required" })
        .min(1, { error: "This field is required" }),
      lastName: z
        .string({ error: "This field is required" })
        .min(1, { error: "This field is required" }),
      emailAddress: z.email({
        error: (issue) =>
          issue.input === "" || issue.input === undefined
            ? "Please enter a valid email address"
            : "A valid email address name is required",
      }),
      type: z.enum(["support-request", "general-inquiry"], {
        error: "Please select a query type",
      }),
      message: z
        .string({ error: "This field is required" })
        .min(1, { error: "This field is required" }),
      consent: z
        .string({
          error: "To submit this form, please consent to being contacted",
        })
        .transform((value) => value === "on"),
    }),
    handler: async (input) => {
      return true;
    },
  }),
};
