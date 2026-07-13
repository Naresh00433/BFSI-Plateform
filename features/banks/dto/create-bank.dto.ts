export interface CreateBankDto {
  name: string;
  slug: string;
  shortName?: string;
  description?: string;
  website?: string;
  supportEmail?: string;
  supportPhone?: string;
  logo?: string;
  priority: number;
}