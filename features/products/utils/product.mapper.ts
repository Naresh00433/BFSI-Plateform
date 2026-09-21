import { Product } from "@prisma/client";

export class ProductMapper {
  static toResponse(product: Product) {
    return {
      id: product.id,
      bankId: product.bankId,
      categoryId: product.categoryId,

      name: product.name,
      slug: product.slug,

      shortDescription: product.shortDescription,
      description: product.description,

      logo: product.logo,
      banner: product.banner,

      joiningFee: product.joiningFee,
      annualFee: product.annualFee,
      interestRate: product.interestRate,
      cashback: product.cashback,

      processingTime: product.processingTime,
      minimumIncome: product.minimumIncome,
      minimumAge: product.minimumAge,
      maximumAge: product.maximumAge,

      priority: product.priority,
      featured: product.featured,
      status: product.status,

      applyUrl: product.applyUrl,

      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }

  static toResponseList(products: Product[]) {
    return products.map((product) =>
      ProductMapper.toResponse(product),
    );
  }
}