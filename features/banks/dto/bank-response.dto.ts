export interface BankResponseDto {
  id: string;
  name: string;
  slug: string;
  shortName: string | null;
  description: string | null;
  website: string | null;
  supportEmail: string | null;
  supportPhone: string | null;
  logo: string | null;
  priority: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}