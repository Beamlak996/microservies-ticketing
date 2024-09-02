import { object, string, TypeOf } from "zod";

export const signupUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required.",
    }).email("Not a valid email."),
    password: string({
      required_error: "Password is required.",
    })
      .min(4, "Password is too short, should be a minimum of 4 characters.")
      .max(20, "Password is too long, should be a maximum of 20 characters."),
  }),
});

export type SignupUserInput = TypeOf<typeof signupUserSchema>;
