import { getReservations } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

const ReservationList = async () => {
  const reservation = await getReservations();
  if (!reservation)
    return (
      <div className="py-10 text-center text-gray-500">
        No Reservation Found
      </div>
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
              Customer Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Arrival
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Departure
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
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reservation.map((reserve) => (
            <tr className="hover:bg-gray-100" key={reserve.id}>
              <td className="px-6 py-4">
                <div className="relative w-32 h-20">
                  <Image
                    src={reserve.Room.image}
                    alt="room image"
                    sizes="20vw"
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{reserve.User.name}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.startDate.toISOString())}
              </td>
              <td className="px-6 py-4">
                {formatDate(reserve.endDate.toISOString())}
              </td>
              <td className="px-6 py-4">{reserve.Room.name}</td>
              <td className="px-6 py-4">{formatCurrency(reserve.price)}</td>
              <td className="px-6 py-4">
                {formatDate(reserve.createdAt.toString())}
              </td>

              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-center gap-1">
                  <span className="capitalize">{reserve.Payment?.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
