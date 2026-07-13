export interface UserResponseDto {
  id: string;
  email: string | null;
  phone: string | null;
  status: string;

  profile: {
    firstName: string;
    lastName: string;
  } | null;

  roles: string[];
}