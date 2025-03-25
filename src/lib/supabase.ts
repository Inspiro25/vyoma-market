import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaaxjwxwqfnquzxgbrmj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhYXhqd3h3cWZucXV6eGdicm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MDMwMDcsImV4cCI6MjA1Nzk3OTAwN30._mKtANxNjgfnHgT3GO06Q9dFJHlWB4wYRVOmLyW6aN0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);