'use client';

import "./BookingForm.css";
import { BookingFormData } from "@/types/bookingData";
import { validatePhone, validateName, validateDate } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { timeSlots } from "@/constants/timeSlots";

interface Props {
  onSubmit: (data: BookingFormData) => void;
}

export default function BookingForm({ onSubmit: onSuccess }: Props) {
  const {
    register, // Функция для регистрации полей формы и их валидации
    handleSubmit, // Функция для обработки отправки формы
    formState: { errors, isSubmitting } // Ошибки валидации и статус отправки формы
  } = useForm<BookingFormData>();

  const submit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Имитация отправки данных на сервер

    onSuccess(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="booking-form"
      id="booking-form"
    >
      <p className="title">Детали бронирования</p>

      {/* Имя */}
      <div className="field">
        <input
          placeholder="Ваше имя"
          className={errors.name ? "input error-border" : "input"}
          {...register("name", {
            required: "Введите имя",
            validate: validateName
          })}
        />
        {errors.name && (
          <p className="error">{errors.name.message}</p>
        )}
      </div>

      {/* Телефон */}
      <div className="field">
        <input
          placeholder="Телефон"
          className={errors.phone ? "input error-border" : "input"}
          {...register("phone", {
            required: "Введите телефон",
            validate: validatePhone
          })}
        />
        {errors.phone && (
          <p className="error">{errors.phone.message}</p>
        )}
      </div>

      {/* Дата */}
      <div className="field">
        <input
          type="date"
          className={errors.date ? "input error-border" : "input"}
          {...register("date", {
            required: "Выберите дату",
            validate: validateDate
          })}
        />
        {errors.date && (
          <p className="error">{errors.date.message}</p>
        )}
      </div>

      {/* Время */}
      <div className="field">
        <select
          {...register("time", {
            required: "Выберите время"
          })}
          className={errors.time ? "select error-border" : "select"}
        >
          <option value="">Выберите время</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        {errors.time && (
          <p className="error">{errors.time.message}</p>
        )}
      </div>

      {/* Гости */}
      <div className="field">
        <input
          type="number"
          placeholder="1-12 гостей"
          min={1}
          max={12}
          className={errors.guests ? "input error-border" : "input"}
          {...register("guests", {
            required: "Введите количество гостей",
            min: { value: 1, message: "Минимум 1 гость" },
            max: { value: 12, message: "Максимум 12 гостей" },
            valueAsNumber: true
          })}
        />

        {errors.guests && (
          <p className="error">{errors.guests.message}</p>
        )}
      </div>

      {/* BUTTON */}
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="spinner" />
            Бронирую...
          </>
        ) : (
          "Забронировать"
        )}
      </button>
    </form>
  );
}