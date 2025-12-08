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
