import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@example.com';
  const password = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password,
    },
  });

  console.log('Admin account created!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
