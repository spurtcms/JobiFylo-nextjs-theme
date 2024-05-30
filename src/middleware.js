import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
export function middleware(request) {
   
    const token =cookies().get("Token")
    //  if(token?.value !=undefined){
        if (token!=undefined && request.nextUrl.pathname.includes("/auth")) {
          const absoluteUrl = new URL("/", request.nextUrl.origin);
          return NextResponse.redirect(absoluteUrl.toString());
      } 
      if (token==undefined && request.nextUrl.pathname.includes("/account")) {
        const absoluteUrl = new URL("/", request.nextUrl.origin);
        return NextResponse.redirect(absoluteUrl.toString());
    }
      // }
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }