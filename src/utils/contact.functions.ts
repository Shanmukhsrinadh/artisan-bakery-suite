import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((input: z.infer<typeof contactSchema>) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables");
      return { success: false, error: "Server configuration error" };
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });

    if (error) {
      console.error("Contact form submission error:", error);
      return { success: false, error: "Failed to submit. Please try again." };
    }

    return { success: true, error: null };
  });
