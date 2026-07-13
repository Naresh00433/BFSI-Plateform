import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "@/lib/auth";
import { UnauthorizedError } from "@/lib/errors";
import { RefreshTokenRepository } from "../repositories/refresh-token.repository";

export class RefreshTokenService {
  private readonly refreshRepository = new RefreshTokenRepository();

  async execute(token: string) {
    // Verify JWT signature
    await verifyRefreshToken(token);

    // Find token in database
    const storedToken = await this.refreshRepository.find(token);

    if (!storedToken) {
      throw new UnauthorizedError("Refresh token not found");
    }

    if (storedToken.revoked) {
      throw new UnauthorizedError("Refresh token revoked");
    }

    if (storedToken.expiresAt < new Date()) {
      throw new UnauthorizedError("Refresh token expired");
    }

    // Generate new tokens
    const accessToken = await generateAccessToken({
      userId: storedToken.user.id,
      email: storedToken.user.email,
      phone: storedToken.user.phone,
    });

    const refreshToken = await generateRefreshToken({
      userId: storedToken.user.id,
      email: storedToken.user.email,
      phone: storedToken.user.phone,
    });

    // Rotate refresh token
    await this.refreshRepository.revoke(token);

    await this.refreshRepository.create({
      userId: storedToken.user.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}