'use client';
import "./Confirmation.css";

import { BookingFormData, BookingStatus } from "@/types/bookingData";
import { formatDate } from "@/utils/formatDate";

interface Props {
  bookingData: BookingFormData;

  setStatus: (status: BookingStatus) => void;

  setBookingData: (
    data: BookingFormData | null
  ) => void;
}

export default function Confirmation({
  bookingData,
  setStatus,
  setBookingData
}: Props) {
  return (
    <div className="success">
      <h3>Бронирование подтверждено!</h3>

      <p>Имя: {bookingData.name}</p>

      <p>
        Дата: {formatDate(bookingData.date)}
      </p>

      <p>Время: {bookingData.time}</p>

      <p>Гостей: {bookingData.guests}</p>

      <button
        onClick={() => {
          setStatus("idle");
          setBookingData(null);
        }}
      >
        Забронировать ещё
      </button>
    </div>
  );
}