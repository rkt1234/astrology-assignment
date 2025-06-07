const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAstrologers = async (req, res) => {
  try {
    const astrologers = await prisma.astrologer.findMany();

    res.status(200).json({ astrologers });
  } catch (err) {
    console.error('Error fetching astrologers:', err);
    res.status(500).json({ error: 'Failed to fetch astrologers' });
  }
};
