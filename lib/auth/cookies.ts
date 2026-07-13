import { cookies } from "next/headers";

const ACCESS_TOKEN_NAME = "access_token";
const REFRESH_TOKEN_NAME = "refresh_token";

export class CookieService {
  static async setAccessToken(token: string) {
    const cookieStore = await cookies();

    cookieStore.set(ACCESS_TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });
  }

  static async setRefreshToken(token: string) {
    const cookieStore = await cookies();

    cookieStore.set(REFRESH_TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  static async clearTokens() {
    const cookieStore = await cookies();

    cookieStore.delete(ACCESS_TOKEN_NAME);
    cookieStore.delete(REFRESH_TOKEN_NAME);
  }
}