import CreateForm from "@/components/admin/room/create-form";
import { getAminities } from "@/lib/data";

const CreateRoom = async () => {
  const amenities = await getAminities();
  if (!amenities) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Create a New Room
      </h1>
      <CreateForm amenities={amenities} />
    </div>
  );
};

export default CreateRoom;
