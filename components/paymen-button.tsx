"use client";
import { useTransition } from "react";
import { reservationProps } from "@/types/reservation";

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

const PaymentButton = ({ reservation }: { reservation: reservationProps }) => {
  const [isPending, startTransition] = useTransition();
  const handlePayment = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          body: JSON.stringify(reservation),
        });
        const { token } = await response.json();
        if (token) {
          window.snap.pay(token);
        }
      } catch (error) {
        console.log("Payment Error: ", error);
      }
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="px-10 py-4 mt-2 text-center w-full font-bold bg-orange-400 rounded-sm hover:bg-orange-500 text-white cursor-pointer"
    >
      {isPending ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PaymentButton;
