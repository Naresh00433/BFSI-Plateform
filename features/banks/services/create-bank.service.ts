import { ConflictError } from "@/lib/errors";

import { BankRepository } from "../repositories/bank.repository";
import { CreateBankDto } from "../dto/create-bank.dto";
import { BankMapper } from "../utils/bank.mapper";

export class CreateBankService {
  private readonly repository = new BankRepository();

  async execute(data: CreateBankDto) {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new ConflictError("Bank already exists.");
    }

    const bank = await this.repository.create(data);

    return BankMapper.toResponse(bank);
  }
}
