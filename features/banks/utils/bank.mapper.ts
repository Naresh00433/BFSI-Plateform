import { Bank } from "@prisma/client";
import { BankResponseDto } from "../dto/bank-response.dto";

export class BankMapper {
  static toResponse(bank: Bank): BankResponseDto {
    return {
      id: bank.id,
      name: bank.name,
      slug: bank.slug,
      shortName: bank.shortName,
      description: bank.description,
      website: bank.website,
      supportEmail: bank.supportEmail,
      supportPhone: bank.supportPhone,
      logo: bank.logo,
      priority: bank.priority,
      status: bank.status,
      createdAt: bank.createdAt,
      updatedAt: bank.updatedAt,
    };
  }

  static toResponseList(banks: Bank[]): BankResponseDto[] {
    return banks.map(this.toResponse);
  }
}