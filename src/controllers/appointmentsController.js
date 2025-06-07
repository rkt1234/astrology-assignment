const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAppointments = async (req, res) => {
  try {
    const userId = req.user.id;  // Ensure your JWT middleware sets this
    const appointments = await prisma.appointment.findMany({
      where: { userId: userId }
    });

    res.status(200).json({ appointments });
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { userId, astrologerId, time, status } = req.body;

    // Basic validation
    if (!userId || !astrologerId || !time || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const appointment = await prisma.appointment.create({
      data: {
        userId,
        astrologerId,
        time: new Date(time),
        status,
      },
    });

    res.status(201).json({ appointment });
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};
