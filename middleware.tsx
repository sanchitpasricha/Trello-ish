import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = localStorage.getItem("token");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
    if (!decodedToken) {
      return new Response("Unauthorized", { status: 401 });
    }
    const userId = (decodedToken as any).userId;

    const headers = new Headers(request.headers);
    headers.set("userId", userId.toString());

    return NextResponse.next({
      request: {
        headers: headers,
      },
    });
  } catch (error) {
    return new Response("Unauthorized", { status: 401 });
  }
}

export const config = {
  matcher: "/boards",
};
