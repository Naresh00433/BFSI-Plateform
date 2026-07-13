import { prisma } from "@/lib/prisma/client";

export class RefreshTokenRepository {
  async create(data: {
    userId: string;
    token: string;
    expiresAt: Date;
  }) {
    return prisma.refreshToken.create({
      data,
    });
  }

  async find(token: string) {
    return prisma.refreshToken.findUnique({
      where: {
        token,
      },
      include: {
        user: {
          include: {
            profile: true,
            roles: {
              include: {
                role: true,
              },
            },
          },
        },
      },
    });
  }

  async revoke(token: string) {
    return prisma.refreshToken.update({
      where: {
        token,
      },
      data: {
        revoked: true,
      },
    });
  }

  async revokeAll(userId: string) {
    return prisma.refreshToken.updateMany({
      where: {
        userId,
        revoked: false,
      },
      data: {
        revoked: true,
      },
    });
  }
}