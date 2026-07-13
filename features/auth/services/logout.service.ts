import { RefreshTokenRepository } from "../repositories/refresh-token.repository";

export class LogoutService {
  private readonly refreshRepository = new RefreshTokenRepository();

  async execute(refreshToken: string) {
    const token = await this.refreshRepository.find(refreshToken);

    if (!token) {
      return;
    }

    await this.refreshRepository.revoke(refreshToken);
  }
}