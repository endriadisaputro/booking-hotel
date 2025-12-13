import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getAminities = async () => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorize Access");
  }
  try {
    const result = await prisma.amenities.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRooms = async () => {
  const session = await auth();

  try {
    const result = await prisma.room.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: { RoomAmenities: { select: { amenitiesId: true } } },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomDetailById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomAmenities: {
          include: {
            Amenities: {
              select: { name: true },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationById = async (id: string) => {
  try {
    const result = await prisma.reservation.findUnique({
      where: { id },
      include: {
        Room: {
          select: { name: true, price: true, image: true },
        },
        User: {
          select: { name: true, email: true, phone: true },
        },
        Payment: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getDissableRoomById = async (roomId: string) => {
  try {
    const result = await prisma.reservation.findMany({
      select: { startDate: true, endDate: true },
      where: { roomId: roomId, Payment: { status: { not: "failure" } } },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
