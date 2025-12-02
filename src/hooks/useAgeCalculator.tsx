import { useState } from "react";
import { calculateAge, isValidPastYear } from "../constants/functions";

type FieldName = "day" | "month" | "year";

type ValuesState = Record<FieldName, string>;
type ErrorState = Record<FieldName, string>;

const numbersRegExp = /^\d*$/;
const dayRegExp = /^([1-9]|[12]\d|3[01])$/;
const monthRegExp = /^([1-9]|1[0-2])$/;

const FIELDS: FieldName[] = ["day", "month", "year"];

const initialState = {
  day: "",
  month: "",
  year: "",
};

const resultInitialState = {
  days: "",
  months: "",
  years: "",
};

export const useAgeCalculator = () => {
  const [values, setValues] = useState<ValuesState>(initialState);

  const [error, setError] = useState<ErrorState>(initialState);

  const [results, setResults] = useState(resultInitialState);

  const validateField = (name: FieldName, value: string): string => {
    if (!value) return "";
    if (!numbersRegExp.test(value)) return "Must be a number";

    switch (name) {
      case "day":
        if (!dayRegExp.test(value)) {
          return "Must be a valid day";
        }
        break;
      case "month":
        if (!monthRegExp.test(value)) {
          return "Must be a valid month";
        }
        break;
      case "year":
        const yearError = isValidPastYear(value);
        if (yearError) return yearError;
        break;
      default:
        return "";
    }

    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as FieldName;

    if (!numbersRegExp.test(value)) return;

    setValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    const fieldError = validateField(fieldName, value);

    setError((prev) => ({
      ...prev,
      [fieldName]: fieldError,
    }));
  };

  const handleSubmit = () => {
    const newErrors: Partial<ErrorState> = {};

    FIELDS.forEach((field) => {
      if (!values[field]) {
        newErrors[field] = "This field is required";
      } else {
        const fieldError = validateField(field, values[field]);
        if (fieldError) newErrors[field] = fieldError;
      }
    });

    setError((prev) => ({
      ...prev,
      ...newErrors,
    }));

    if (Object.values(newErrors).some((err) => err && err !== "")) return;

    setResults(calculateAge(values.day, values.month, values.year));
  };

  const hasErrors = Object.values(error).some((err) => err !== "");
  const isSubmitDisabled = hasErrors;

  return {
    results,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled,
    values,
    error,
  };
};
