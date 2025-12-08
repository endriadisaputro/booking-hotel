import { getRooms } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";
import { DeleteButton } from "@/components/admin/room/button";

const RoomTable = async () => {
  const rooms = await getRooms();
  if (!rooms?.length)
    return (
      <div className="py-10 text-center text-gray-500">No Rooms Available</div>
    );

  return (
    <div className="bg-white p-4 mt-5 shadow-sm ">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Room Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Price
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rooms.map((room) => (
            <tr className="hover:bg-gray-100" key={room.id}>
              <td className="px-6 py-4">
                <div className="relative w-32 h-20">
                  <Image
                    src={room.image}
                    alt={room.name}
                    sizes="20vw"
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{formatCurrency(room.price)}</td>
              <td className="px-6 py-4">
                {formatDate(room.createdAt.toString())}
              </td>

              <td className="px-6 py-4 text-right">
                <DeleteButton id={room.id} image={room.image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
