import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://whgiftfytqyqvyuijwgu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZ2lmdGZ5dHF5cXZ5dWlqd2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjA1MDQsImV4cCI6MjA2MzU5NjUwNH0.NGJUZrRni4YyrYcav2g0oOS4YNhCPBtsuwgsJ0kq-Bk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);