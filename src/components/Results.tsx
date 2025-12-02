import type { Result } from "../types";
import { ResultItem } from "./ResultItem";

type Props = {
  results: Result;
};

export const Results = ({ results }: Props) => {
  return (
    <div className="flex flex-col leading-tight md:leading-none">
      <ResultItem resultText="years" result={results.years} />
      <ResultItem resultText="months" result={results.months} />
      <ResultItem resultText="days" result={results.days} />
    </div>
  );
};
