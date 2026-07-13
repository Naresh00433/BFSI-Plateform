import { UserResponseDto } from "../dto/user-response.dto";
import { UserWithRelations } from "../types/user-with-relations";

export class UserMapper {
  static toResponse(user: UserWithRelations): UserResponseDto {
    return {
      id: user.id,

      email: user.email,

      phone: user.phone,

      status: user.status,

      profile: user.profile
        ? {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
          }
        : null,

      roles: user.roles?.map((role: any) => role.role.name) ?? [],
    };
  }
}
