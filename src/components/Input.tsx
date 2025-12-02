type Props = {
  labelText: string;
  inputName: string;
  inputPlaceholder: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Input = ({
  labelText,
  inputName,
  inputPlaceholder,
  error,
  handleChange,
  value,
}: Props) => {
  const labelStyles = `font-semibold text-Grey-500 tracking-widest text-xs uppercase ${
    error ? "text-Red-400" : ""
  }`;

  const inputStyles = `w-20 md:w-28 px-3 md:px-4 py-2 text-xl md:text-2xl font-bold outline-1 outline-Grey-200 focus:outline-Purple-500 rounded-lg ${
    error ? "outline-Red-400" : ""
  }`;

  const spanErrorStyles = `text-[10px] md:text-xs italic transition-opacity duration-200 min-h-8 ${
    error ? "text-Red-400 opacity-100" : "opacity-0 text-transparent"
  }`;

  return (
    <div className="flex flex-col gap-2 w-36">
      <label className={labelStyles} htmlFor={inputName}>
        {labelText}
      </label>
      <input
        onChange={handleChange}
        className={inputStyles}
        name={inputName}
        type="text"
        placeholder={inputPlaceholder}
        value={value}
      />
      <span className={spanErrorStyles} aria-live="polite">
        {error || "\u00A0"}
      </span>
    </div>
  );
};
