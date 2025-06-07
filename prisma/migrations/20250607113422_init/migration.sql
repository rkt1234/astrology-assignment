-- CreateTable
CREATE TABLE "Astrologer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "skills" TEXT[],
    "availableTimeSlots" TEXT[],

    CONSTRAINT "Astrologer_pkey" PRIMARY KEY ("id")
);
