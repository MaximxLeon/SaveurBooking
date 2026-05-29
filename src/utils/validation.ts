// Функция для валидации имени
export function validateName(value: string): string | true {
  const v = value.trim();

  if (v.length === 0) {
    return "Введите имя";
  }

  if (v.length < 2) {
    return "Минимум 2 символа";
  }

  // только буквы (рус/лат), пробелы и дефис
  const regex = /^[A-Za-zА-Яа-яЁё\s-]+$/;

  if (!regex.test(v)) {
    return "Только буквы, пробелы и дефис";
  }

  return true;
}

// Функция для валидации телефона
export function validatePhone(value: string): string | true {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 11 &&
    (digits[0] === '7' || digits[0] === '8')) {
        return true;
    }
    return 'Введите корректный номер: +7 или 8, 10 цифр';
}

// Функция для валидации даты
export function validateDate(value: string): string | true {
  if (!value) {
    return "Выберите дату";
  }

  const selectedDate = new Date(value);
  const today = new Date();

  today.setHours(0, 0, 0, 0); // обнуляем время для сравнения только по дате

  const maxDate = new Date(); // Сегодняшняя дата + 90 суток
  maxDate.setDate(today.getDate() + 90);
  maxDate.setHours(0, 0, 0, 0); // обнуляем время для сравнения только по дате

  if (selectedDate < today) {
    return "Дата не может быть в прошлом";
  }

  if (selectedDate > maxDate) {
    return "Можно бронировать только на 90 дней вперёд";
  }

  return true;
}