const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const appointment1 = await prisma.appointment.create({
    data: {
      userId: 1,           // replace with actual user ID
      astrologerId: 2,     // replace with actual astrologer ID
      time: new Date('2025-06-10T10:00:00Z'),
      status: 'pending',
    },
  });

  const appointment2 = await prisma.appointment.create({
    data: {
      userId: 3,           // replace with actual user ID
      astrologerId: 4,     // replace with actual astrologer ID
      time: new Date('2025-06-11T15:30:00Z'),
      status: 'confirmed',
    },
  });

  console.log('Seeded appointments:', appointment1, appointment2);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
