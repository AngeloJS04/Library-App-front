import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "./config";
import { authRoutes } from "./utils/middlewares/protected-routes";

export interface ValidateAuthI {
    cookies: string | null;
    req: NextRequest;
}

export async function middleware(request: NextRequest) {
    let url = request.nextUrl.clone();
    if (url.pathname.indexOf(".") != -1 || typeof window !== "undefined") return;

    const isFileRegex = /(_next\/static|_next\/image|favicon\.ico|\/_next)/;
    if (isFileRegex.test(url.pathname)) return;

    const response = NextResponse.next();
    const isPathAuth = authRoutes.find((x: string) => url.pathname.includes(x));

    const user = await getUser({
        cookies: request.headers.get("Cookie"),
        req: request,
    });

    if (!user && !isPathAuth) {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
    }


    return response;
}
export const getUser = async ({ cookies, req }: ValidateAuthI): Promise<object | null> => {
    return new Promise((resolve) => {
        const url = req.nextUrl.clone();
        fetch(`${appConfig.api.url}/auth/me`, {
            method: "GET",
            credentials: 'include',
            headers: {
                Cookie: `${cookies}`,
                'Content-Type': 'application/json',
                Origin: appConfig.app.url || url.origin,
            },
        })
            .then((result) => result.json())
            .then((response) => {
                resolve(response.error ? null : response);
            })
            .catch((error) => [console.error({ error }), resolve(null)]);
    });
};
