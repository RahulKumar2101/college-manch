// /lib/prisma.ts

import "dotenv/config"; // Ensure .env is loaded for the database URL
import { PrismaClient } from "@prisma/client";

/**
 * Global object extension to safely store the Prisma Client instance.
 * This prevents multiple instantiations during Next.js hot-reloading.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Initialize the Prisma Client, reusing the global instance if it exists.
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["warn", "error"],
  });

// In development mode, attach the instance to the global object.
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

// Export as default for easier import elsewhere
export default prisma;
