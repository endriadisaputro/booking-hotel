import { Metadata } from "next";
import RoomDetail from "@/components/room-detail";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Room Detail",
  description: "This is the room detail page of the application.",
};

const RoomDetailPage = async ({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) => {
  const roomId = (await params).roomId;
  return (
    <div className="mt-16 ">
      <Suspense fallback={<div>Loading...</div>}>
        <RoomDetail roomId={roomId} />
      </Suspense>
    </div>
  );
};

export default RoomDetailPage;
