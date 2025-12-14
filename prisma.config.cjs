require("dotenv/config");

// Export CommonJS config so Prisma CLI can load it during CI/build
// without requiring TypeScript runtime support.
module.exports = {
  schema: { kind: "single", filePath: "prisma/schema.prisma" },
  datasource: {
    url: process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL,
  },
};
