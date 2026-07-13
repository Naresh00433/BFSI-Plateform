import { ForbiddenError } from "@/lib/errors";

type UserRole = {
  role: {
    name: string;
  };
};

export function requireRole(
  user: { roles: UserRole[] },
  role: string
) {
  const hasRole = user.roles.some((r) => r.role.name === role);

  if (!hasRole) {
    throw new ForbiddenError("You do not have permission to access this resource.");
  }
}

export function requireAnyRole(
  user: { roles: UserRole[] },
  roles: string[]
) {
  const hasRole = user.roles.some((r) =>
    roles.includes(r.role.name)
  );

  if (!hasRole) {
    throw new ForbiddenError("You do not have permission to access this resource.");
  }
}