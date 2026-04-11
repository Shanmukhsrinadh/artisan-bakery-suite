import { _ as TSS_SERVER_FUNCTION, $ as createServerFn } from "./worker-entry-DHgQcugd.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().trim().min(1, "Name is required").max(100),
  email: stringType().trim().email("Invalid email address").max(255),
  phone: stringType().trim().max(20).optional().default(""),
  message: stringType().trim().min(1, "Message is required").max(2e3)
});
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "536d5a6ebdda052d485a92852ccdbf3a8d0e2c6e508dc067c0e897a8a9e2bb66",
  name: "submitContactForm",
  filename: "src/utils/contact.functions.ts"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema.parse(input)).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  const {
    createClient
  } = await import("./index-hAT9gJBp.js");
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables");
    return {
      success: false,
      error: "Server configuration error"
    };
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  const {
    error
  } = await supabase.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message
  });
  if (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "Failed to submit. Please try again."
    };
  }
  return {
    success: true,
    error: null
  };
});
export {
  submitContactForm_createServerFn_handler
};
