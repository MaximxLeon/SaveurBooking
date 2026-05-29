import { validateDate, validateName, validatePhone } from "@/utils/validation";
import { describe, it, expect } from "vitest";

describe("validateName", () => {
  it("should return error for empty name", () => {
    expect(validateName("")).toBe("Введите имя");
  });

  it("should return true for valid name", () => {
    expect(validateName("Иван")).toBe(true);
  });
});

describe("validatePhone", () => {
  it("should reject invalid phone", () => {
    expect(validatePhone("123")).toBe(
      "Введите корректный номер: +7 или 8, 10 цифр"
    );
  });

  it("should accept valid phone", () => {
    expect(validatePhone("89001234567")).toBe(true);
  });
});

describe("validateDate", () => {
  it("should reject empty date", () => {
    expect(validateDate("")).toBe("Выберите дату");
  });
});