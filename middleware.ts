import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only protect /studio paths
  if (pathname.startsWith("/studio")) {
    // Redirect to home in production
    if (process.env.NODE_ENV === "production") {
      const url = req.nextUrl.clone()
      url.pathname = "/"   // redirect to homepage
      return NextResponse.redirect(url)
    }
  }

  // Allow all other requests
  return NextResponse.next()
}

// Apply middleware only to /studio paths
export const config = {
  matcher: ["/studio/:path*"],
}
