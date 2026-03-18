const SUPABASE_URL = "https://fsjtihhieprlfsduyuwo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzanRpaGhpZXBybGZzZHV5dXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NDE3NTksImV4cCI6MjA4OTExNzc1OX0.QXJbsaBydzQJ8mDN2mg1SLHd9rQ43WQ3BdLF_YRC_gc";

const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { sbClient };

