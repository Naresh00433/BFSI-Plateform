export interface UpdateProductDto {
  bankId?: string;
  categoryId?: string;
  name?: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  logo?: string;
  banner?: string;

  joiningFee?: number;
  annualFee?: number;
  interestRate?: number;
  cashback?: number;

  processingTime?: string;
  minimumIncome?: number;
  minimumAge?: number;
  maximumAge?: number;

  priority?: number;
  featured?: boolean;
  applyUrl?: string;
}