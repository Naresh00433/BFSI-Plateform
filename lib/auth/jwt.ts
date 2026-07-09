import { SignJWT, jwtVerify } from "jose";
import { env } from "@/lib/config";
import type { JWTPayload } from "jose";

const accessSecret = new TextEncoder().encode(env.JWT_SECRET);
const refreshSecret = new TextEncoder().encode(env.JWT_REFRESH_SECRET);

export interface JwtPayload extends JWTPayload {
  userId: string;
  email?: string | null;
  phone?: string | null;
}

export async function generateAccessToken(payload: JwtPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(accessSecret);
}

export async function generateRefreshToken(payload: JwtPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(refreshSecret);
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify(token, accessSecret);

  return payload as JwtPayload;
}

export async function verifyRefreshToken(token: string) {
  const { payload } = await jwtVerify(token, refreshSecret);

  return payload as JwtPayload;
}