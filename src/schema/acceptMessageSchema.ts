// message for accepting
import { boolean, z } from "zod";

export const acceptMessageSchema = z.object({
  acceptMessage: z.boolean(),
});
