import { deleteRoom } from "@/lib/actions";
import { IoTrashOutline, IoPencil } from "react-icons/io5";
import Link from "next/link";
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/room/edit/${id}`}
      className="rounded-sm p-1 hover:bg-green-700 cursor-pointer"
    >
      <IoPencil className="size-5 hover:text-white" />
    </Link>
  );
};
export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image);
  return (
    <form action={DeleteRoomWithId}>
      <button
        type="submit"
        className="rounded-sm p-1 hover:bg-red-400 cursor-pointer"
      >
        <IoTrashOutline className="size-5 hover:text-white" />
      </button>
    </form>
  );
};
