import CheckoutDetail from "@/components/checkout-detail";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservation Summary - Booking Hotel",
};

const CheckOutPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const reservationId = (await params).id;
  return (
    <div className="max-w-screen-xl px-4 mx-auto py-20 mt-10">
      <h1 className="text-2xl font-semibold mb-8">Reservation Summary</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutDetail reservationId={reservationId} />
      </Suspense>
    </div>
  );
};

export default CheckOutPage;
