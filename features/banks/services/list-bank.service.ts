import { BankFilter } from "../types/bank-filter.type";
import { BankMapper } from "../utils/bank.mapper";
import { BankRepository } from "../repositories/bank.repository";

export class ListBankService {
  private readonly repository = new BankRepository();

  async execute(filter: BankFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: BankMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }
}
