import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface SubmitConfirmationProps {
  onSubmitMoreFeedback: () => void;
}

const SubmitConfirmation = ({
  onSubmitMoreFeedback,
}: SubmitConfirmationProps) => {
  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-justify-center fr-w-full fr-gap-4 fr-h-full">
      <CheckBadgeIcon className="fr-text-green-500 fr-size-10 " />
      <p className="fr-text-xl fr-font-bold fr-text-center">
        Thank you! We received your feedback.
      </p>
      <button
        className="fr-w-[180px] fr-h-[40px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300"
        onClick={onSubmitMoreFeedback}
      >
        Submit more feedback
      </button>
    </div>
  );
};

export default SubmitConfirmation;
