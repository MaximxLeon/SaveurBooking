'use client';

import { useState } from "react";
import BookingForm from "./BookingForm/BookingForm";
import { BookingFormData, BookingStatus } from "@/types/bookingData";

import "./Main.css";
import Confirmation from "./BookingForm/Confirmation";

export default function Main() {
  const [status, setStatus] = useState<BookingStatus>("idle"); // Статус бронирования: idle, loading, success
  const [bookingData, setBookingData] =
    useState<BookingFormData | null>(null);

  const handleBooking = async (data: BookingFormData) => {
    setStatus("loading");

    await new Promise((r) => setTimeout(r, 1500));

    setBookingData(data);
    setStatus("success");
  };

  return (
    <main>
      <section className="main-content">
        <h1>Бронирование столика</h1>

        <h2>
          Забронируйте столик онлайн и насладитесь
          атмосферой нашего ресторана
        </h2>

        {status === "idle" && (
          <BookingForm onSubmit={handleBooking} />
        )}

        {status === "loading" && (
          <div className="loader">Загрузка...</div>
        )}

        {status === "success" && bookingData && (
          <Confirmation
            bookingData={bookingData}
            setStatus={setStatus}
            setBookingData={setBookingData}
          />
        )}
      </section>
    </main>
  );
}