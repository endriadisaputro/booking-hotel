import Link from "next/link";
import RoomTable from "@/components/admin/room/room-table";
import { Suspense } from "react";

const RoomPage = () => {
  return (
    <div className="py-20 mt-10 max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Room Management</h1>
        <Link
          href="/admin/room/create"
          className="bg-orange-400 text-white px-6 py-2.5  hover:bg-orange-500 transition font-bold"
        >
          Add New Room
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RoomTable />
      </Suspense>
    </div>
  );
};

export default RoomPage;
