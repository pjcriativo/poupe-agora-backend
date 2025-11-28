import { createClient } from '@supabase/supabase-js';
import { config } from '../config';

// Cliente Supabase com service role (acesso total)
export const supabase = createClient(
    config.supabase.url,
    config.supabase.serviceRoleKey,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);

// Cliente Supabase com anon key (para operações públicas se necessário)
export const supabaseAnon = createClient(
    config.supabase.url,
    config.supabase.anonKey
);
