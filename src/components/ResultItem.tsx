type Props = {
  resultText: string;
  result: string;
};

export const ResultItem = ({ resultText, result }: Props) => {
  return (
    <div className="flex items-baseline font-bold text-6xl md:items-center md:text-8xl">
      <span className="text-Purple-500 leading-0">
        {result ? result : "- -"}
      </span>
      <span className="italic">{resultText}</span>
    </div>
  );
};
