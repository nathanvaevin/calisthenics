/* =====================================================================
   Copy this file to assets/config.js and fill in the two values from
   Supabase, Settings, API.

   Both values belong in the committed file. The anon key is not a
   secret: it names the project and every request it makes is still
   filtered by the Row Level Security policies in supabase/schema.sql.
   A static site has no other place to put it.

   The service_role key is a real secret and never goes in this file,
   this repository, or anything the browser can fetch.
   ===================================================================== */
window.SUPABASE_CONFIG = {
  url: "https://YOUR-PROJECT-REF.supabase.co",
  anonKey: "YOUR-ANON-PUBLIC-KEY"
};
