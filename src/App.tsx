import { Input } from "./components/Input";
import { Results } from "./components/Results";
import { useAgeCalculator } from "./hooks/useAgeCalculator";
import { Button } from "./components/Button";

const App = () => {
  const {
    handleInputChange,
    values,
    error,
    handleSubmit,
    isSubmitDisabled,
    results,
  } = useAgeCalculator();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="md:min-w-2xl bg-White px-6 py-10 md:p-12 rounded-3xl rounded-br-[4rem] w-full max-w-sm md:max-w-fit shadow-sm">
        <form className="flex gap-4 md:gap-5 mb-10 md:mb-0">
          <Input
            labelText="Day"
            inputName="day"
            inputPlaceholder="DD"
            handleChange={handleInputChange}
            value={values.day}
            error={error.day}
          />
          <Input
            labelText="Month"
            inputName="month"
            inputPlaceholder="MM"
            handleChange={handleInputChange}
            value={values.month}
            error={error.month}
          />
          <Input
            labelText="Year"
            inputName="year"
            inputPlaceholder="YYYY"
            handleChange={handleInputChange}
            value={values.year}
            error={error.year}
          />
        </form>

        <Button
          isSubmitDisabled={isSubmitDisabled}
          handleSubmit={handleSubmit}
        />

        <Results results={results} />
      </div>
    </main>
  );
};

export default App;
