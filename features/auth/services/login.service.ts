import {
  generateAccessToken,
  generateRefreshToken,
  Password,
} from "@/lib/auth";
import { UnauthorizedError } from "@/lib/errors";
import { UserRepository } from "../repositories/user.repository";
import { LoginInput } from "../validations/login.schema";
import { UserMapper } from "../utils/user.mapper";
import { RefreshTokenRepository } from "../repositories/refresh-token.repository";

export class LoginService {
  private readonly userRepository = new UserRepository();
  private readonly refreshRepository = new RefreshTokenRepository();

  async execute(data: LoginInput) {
    const user = await this.userRepository.findByEmailOrPhone(data.identifier);

    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const validPassword = await Password.compare(
      data.password,
      user.passwordHash,
    );

    if (!validPassword) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const accessToken = await generateAccessToken({
      userId: user.id,
      email: user.email,
      phone: user.phone,
    });

    const refreshToken = await generateRefreshToken({
      userId: user.id,
      email: user.email,
      phone: user.phone,
    });

console.log("Saving refresh token...");

const savedToken = await this.refreshRepository.create({
  userId: user.id,
  token: refreshToken,
  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
});

console.log("Saved token:", savedToken);

    return {
      user: UserMapper.toResponse(user),
      accessToken,
      refreshToken,
    };
  }
}
