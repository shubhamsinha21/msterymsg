// user will sign
import { z } from "zod";

// identifier - is simple as username , email ... just name are different
// username apna email pwd do

export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
