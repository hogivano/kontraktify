import { useRuntimeConfig } from "nuxt/app";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
const config = useRuntimeConfig();

const supabase = createClient<Database>(
  config.supabaseUrl as string,
  config.supabaseKey as string,
);

export default supabase;
