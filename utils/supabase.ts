import { createClient } from '@supabase/supabase-js'

// Use environment variables if available, otherwise use placeholder values for development
const supabaseUrl = process.env.SUPABASE_URL || process.env.NUXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || process.env.NUXT_PUBLIC_SUPABASE_KEY || 'placeholder_anon_key'

export const supabase = createClient(supabaseUrl, supabaseKey)