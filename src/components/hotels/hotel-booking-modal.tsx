import React from "react";
import Modal from "../primary/modals/modal";
import PaymentForm from "../primary/payments/payment-form";
import HotelBookingForm from "./details/hotel-booking-form";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data?: any) => void;
    hotelName: string;
}

const BookingModalStep = {
    HotelBooking: "hotel-booking",
    Payment: "payment",
} as const;
type BookingModalStep = (typeof BookingModalStep)[keyof typeof BookingModalStep];

export default function HotelBookingModal({ isOpen, onClose, onSubmit, hotelName }: BookingModalProps) {

    const [step, setStep] = React.useState<BookingModalStep>(BookingModalStep.HotelBooking);

    const handleHotelBookingSubmit = (data: any) => {
        onSubmit(data);
        setStep(BookingModalStep.Payment);
    };

    const handlePaymentSubmit = (data: any) => {
        onSubmit(data);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Booking at ${hotelName}`}>
            {step === BookingModalStep.HotelBooking && (
                <HotelBookingForm onSubmit={handleHotelBookingSubmit} />
            )}
            {step === BookingModalStep.Payment && (
                <PaymentForm onSubmit={handlePaymentSubmit} />
            )}
        </Modal>
    );

}
