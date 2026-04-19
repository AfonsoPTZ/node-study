import { PrismaClient } from "@prisma/client";

/**
 * Instância do Prisma Client
 * Gerencia conexão e operações com o banco de dados MySQL
 * Usa as configurações do arquivo .env (DATABASE_URL)
 */
const prisma = new PrismaClient();

export default prisma;
