import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const roles = [
    {
      name: "Super Admin",
      description: "Full system access",
    },
    {
      name: "Admin",
      description: "System administrator",
    },
    {
      name: "Manager",
      description: "Lead manager",
    },
    {
      name: "Affiliate",
      description: "Affiliate user",
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: {
        name: role.name,
      },
      update: {},
      create: role,
    });
  }

  console.log("✅ Roles seeded successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });