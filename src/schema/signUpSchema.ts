// checking the ddtails and format of user data while signup
import { z } from "zod";

// checking username validation
export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(
    /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
    "Username must not contain special characters"
  );

export const emailVaidation = z.string().email({
  message: "Invalid Email address",
});

//   used z.object because it has multiple checks
// storing in variables
export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailVaidation,
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters",
  }),
});
