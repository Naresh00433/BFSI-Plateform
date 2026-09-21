import { ConflictError, NotFoundError } from "@/lib/errors";
import { CouponStatus } from "@prisma/client";

import { CreateCouponDto } from "../dto/create-coupon.dto";
import { UpdateCouponDto } from "../dto/update-coupon.dto";
import { CouponFilter } from "../types/coupon-filter.type";
import { CouponMapper } from "../utils/coupon.mapper";
import { CouponRepository } from "../repositories/coupon.repository";

export class CouponService {
  private readonly repository = new CouponRepository();

  async create(data: CreateCouponDto) {
    const exists = await this.repository.findByCode(data.code);

    if (exists) {
      throw new ConflictError("Coupon code already exists.");
    }

    const coupon = await this.repository.create(data);

    return CouponMapper.toResponse(coupon);
  }

  async findAll(filter: CouponFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: CouponMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }

  async findById(id: string) {
    const coupon = await this.repository.findById(id);

    if (!coupon) {
      throw new NotFoundError("Coupon not found.");
    }

    return CouponMapper.toResponse(coupon);
  }

  async update(id: string, data: UpdateCouponDto) {
    const coupon = await this.repository.findById(id);

    if (!coupon) {
      throw new NotFoundError("Coupon not found.");
    }

    if (data.code) {
      const duplicate = await this.repository.findByCode(data.code);

      if (duplicate && duplicate.id !== id) {
        throw new ConflictError("Coupon code already exists.");
      }
    }

    const updated = await this.repository.update(id, data);

    return CouponMapper.toResponse(updated);
  }

  async delete(id: string) {
    const coupon = await this.repository.findById(id);

    if (!coupon) {
      throw new NotFoundError("Coupon not found.");
    }

    await this.repository.softDelete(id);

    return {
      message: "Coupon deleted successfully.",
    };
  }

  async updateStatus(id: string, status: CouponStatus) {
    const coupon = await this.repository.findById(id);

    if (!coupon) {
      throw new NotFoundError("Coupon not found.");
    }

    const updated = await this.repository.updateStatus(id, status);

    return CouponMapper.toResponse(updated);
  }
}