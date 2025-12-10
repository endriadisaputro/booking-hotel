import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import Main from "@/components/main";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Room Page",
  description: "This is the room page of the application.",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection title="Room Page" subTitle="Welcome to the room page" />
      <div className="mt-10 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
