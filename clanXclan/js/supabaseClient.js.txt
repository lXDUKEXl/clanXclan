// Replace with your real Supabase credentials
const SUPABASE_URL = 'https://ndrodqttfvzlpwwztkne.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcm9kcXR0ZnZ6bHB3d3p0a25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MzM4NzEsImV4cCI6MjA2NTAwOTg3MX0.PJCtvzYr8ECqUBzSlUPmgGwVsq3TTyjKfFfrgpMzrYk';
const supabase = supabase || supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
