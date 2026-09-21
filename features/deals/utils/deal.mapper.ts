import { Deal } from "@prisma/client";

export class DealMapper {
  static toResponse(deal: Deal) {
    return {
      id: deal.id,
      productId: deal.productId,

      title: deal.title,
      slug: deal.slug,

      description: deal.description,
      image: deal.image,

      discount: deal.discount,
      cashback: deal.cashback,

      terms: deal.terms,

      validFrom: deal.validFrom,
      validUntil: deal.validUntil,

      priority: deal.priority,
      featured: deal.featured,
      status: deal.status,

      createdAt: deal.createdAt,
      updatedAt: deal.updatedAt,
    };
  }

  static toResponseList(deals: Deal[]) {
    return deals.map((deal) => DealMapper.toResponse(deal));
  }
}