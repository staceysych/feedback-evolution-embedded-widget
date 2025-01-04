import { Progress } from "../../types/common";
import { CheckIcon } from "@heroicons/react/24/solid";

interface ProgressTrackerProps {
  progress: Progress;
}

const ProgressTracker = ({ progress }: ProgressTrackerProps) => {
  const progressValues = Object.values(Progress);
  const currentProgressIndex = progressValues.indexOf(progress);

  return (
    <div className="fr">
      <div className="fr-flex fr-w-full fr-justify-center">
        {progressValues.map((data, index) => {
          const isDisabled = index > currentProgressIndex;
          const isActive = index === currentProgressIndex;
          const isDone = isActive && progress === Progress.Done;

          const hasCompleted = (!isDisabled && !isActive) || isDone;
          return (
            <div className="fr-flex fr-flex-grow fr-items-center" key={index}>
              <div
                key={index}
                className="fr-flex fr-flex-col fr-items-center fr-justify-center fr-flex-grow fr-gap-1 fr-text-brandDarkBlue fr-w-[60px] fr-text-xs"
                style={{ opacity: isDisabled ? 0.5 : 1 }}
              >
                {isActive && !isDone && (
                  <>
                    <div className="fr-flex fr-items-center fr-justify-center fr-rounded-full fr-w-[30px] fr-h-[30px] fr-border-2 fr-border-solid fr-border-blue-600">
                      <span className="fr-relative fr-flex fr-h-2 fr-w-2">
                        <span className="!fr-animate-ping fr-absolute fr-inline-flex fr-h-full fr-w-full fr-rounded-full fr-bg-blue-600 opacity-75"></span>
                        <span className="fr-relative fr-inline-flex fr-rounded-full fr-h-2 fr-w-2 fr-bg-blue-600"></span>
                      </span>
                    </div>
                    {data}
                  </>
                )}
                {hasCompleted && (
                  <>
                    <div
                      className="fr-flex fr-items-center fr-justify-center fr-rounded-full fr-w-[30px] fr-h-[30px] "
                      style={{
                        backgroundColor: isDone ? "#0E9E6E" : "#3B82F6",
                      }}
                    >
                      <CheckIcon className="fr-size-5 fr-text-white" />
                    </div>
                    {data}
                  </>
                )}
                {isDisabled && (
                  <>
                    <div className="fr-flex fr-items-center fr-justify-center fr-rounded-full fr-w-[30px] fr-h-[30px] fr-border-2 fr-border-solid fr-border-gray-300"></div>
                    {data}
                  </>
                )}
              </div>

              {index < progressValues.length - 1 && (
                <div className="fr-w-[30px] fr-h-[2px] fr-bg-gray-300 fr-flex-grow fr-mb-[20px]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
