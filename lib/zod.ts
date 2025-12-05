import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(3, "Name at least 3 character"),
  email: string()
    .min(6, "Email at least 6 character")
    .email("Please enter a valid email"),
  subject: string().min(6, "Subject at least 6 character"),
  message: string()
    .min(6, "message at least 6 character")
    .max(200, "message max 200 character"),
});
