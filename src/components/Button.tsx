import ArrowIcon from "../assets/images/icon-arrow.svg";
import { useIsMobile } from "../hooks/useIsMobile";

type Props = {
  isSubmitDisabled: boolean;
  handleSubmit: () => void;
};

export const Button = ({ isSubmitDisabled, handleSubmit }: Props) => {
  const isMobile = useIsMobile();

  const buttonStyles = `flex items-center justify-center md:block bg-Purple-500 p-5 rounded-full hover:bg-Black transition-colors duration-300 ${
    isSubmitDisabled
      ? "cursor-not-allowed pointer-events-none brightness-60"
      : "cursor-pointer"
  }`;

  return (
    <div className="flex items-center gap-4 mb-8 md:gap-0 md:mb-0">
      <div className="flex-1 h-px bg-Grey-200"></div>
      <button
        onClick={handleSubmit}
        className={buttonStyles}
        disabled={isSubmitDisabled}
      >
        <img
          className="w-6 h-6 md:w-10 md:h-fit"
          src={ArrowIcon}
          alt="Arrow Icon"
        />
      </button>
      {isMobile && <div className="flex-1 h-px bg-Grey-200" />}
    </div>
  );
};
