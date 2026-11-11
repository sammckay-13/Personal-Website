// proxy.ts (project root, next to /app)
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/utils/supabase/middleware"; // adjust to wherever your helper lives

export async function proxy(request: NextRequest) {
  return await createClient(request);
}

export const config = {
  matcher: [
    // Skip Better Auth routes, Next.js internals, and static assets
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
