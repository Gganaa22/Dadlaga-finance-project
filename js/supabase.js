// Supabase-ийн албан ёсны JavaScript сангийг (SDK) CDN-ээр дамжуулж ашиглах тохиргоо
// Энэ нь веб хөтчид Supabase функцуудыг танихад тусална.
import { createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'


// Өөрийн Supabase төслийн URL болон Anon Key-ийг энд оруулна.
const SUPABASE_URL = "https://schpzwhmnqpegcuutpax.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaHB6d2htbnFwZWdjdXV0cGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDU5NjMsImV4cCI6MjA5NjUyMTk2M30.mq6CwWGuXrYXZgJWflBSabFGYLvk1s5eemDL3NaaUFU"

// Supabase клентийг үүсгэж, тогтмол хувьсагчид хадгалах
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

if(supabase.auth){
    console.log("Холбогдсон байна!")
    console.log(supabase.auth)
}