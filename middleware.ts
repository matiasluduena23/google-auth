import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/panel/", "/panel/:path*", "/usuarios/", "/usuarios/:path*"],
};
