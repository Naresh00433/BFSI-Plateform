import { Prisma } from "@prisma/client";

export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    profile: true;
    roles: {
      include: {
        role: true;
      };
    };
  };
}>;