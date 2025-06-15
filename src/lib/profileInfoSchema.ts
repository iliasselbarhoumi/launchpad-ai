import { z } from "zod";

export const profileInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  avatarUrl: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export type ProfileInfoFormData = z.infer<typeof profileInfoSchema>;
