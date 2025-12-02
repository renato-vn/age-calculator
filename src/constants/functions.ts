import type { Result } from "../types";

type ValidationResult = string | null;

export const isValidPastYear = (value: string): ValidationResult => {
  const currentYear = new Date().getFullYear();
  const isFourDigits = /^\d{4}$/.test(value);

  if (!isFourDigits) {
    return "Must be 4 digits (YYYY)";
  }

  const year = Number(value);

  if (year < 1200) {
    return "Must be a valid year (1200+)";
  }

  if (year >= currentYear) {
    return "Must be in the past";
  }

  return null;
};

export const calculateAge = (
  day: string,
  month: string,
  year: string
): Result => {
  const d = Number(day);
  const m = Number(month);
  const y = Number(year);

  const today = new Date();
  const fromDate = new Date(y, m - 1, d);

  let years = today.getFullYear() - fromDate.getFullYear();
  let months = today.getMonth() - fromDate.getMonth();
  let days = today.getDate() - fromDate.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonthDate.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: String(years),
    months: String(months),
    days: String(days),
  };
};
