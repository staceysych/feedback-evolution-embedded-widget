import { FeedbackType } from "../../types";
import { useState } from "react";
import { widgetActions } from "./utils";

interface DefaultViewProps {
  setFeedbackType: (type: FeedbackType) => void;
}

const DefaultView = ({ setFeedbackType }: DefaultViewProps) => {
  const [subtitle, setSubtitle] = useState("");

  return (
    <>
      <div className="fr-text-center mb-4">
        <p className="fr-text-lg sm:fr-text-xl fr-font-bold fr-text-brandDarkBlue">
          What's on your mind?
        </p>
      </div>
      <div className="fr-flex fr-justify-between fr-gap-2 sm:fr-gap-6 fr-mt-5 fr-w-full">
        {widgetActions.map(({ type, subtitle: sub, icon }, index) => (
          <button
            key={index}
            className="fr-flex fr-flex-col fr-items-center fr-justify-center fr-h-28 fr-w-full fr-rounded-lg fr-border fr-border-gray-200 hover:fr-bg-brandLightHover fr-transition fr-bg-brandLight fr-text-brandDarkBlue fr-cursor-pointer"
            onMouseEnter={() => setSubtitle(sub)}
            onMouseLeave={() => setSubtitle("")}
            onClick={() => setFeedbackType(type)}
          >
            {icon}
            <span className="fr-text-sm sm:fr-text-lg fr-font-medium">{type}</span>
          </button>
        ))}
      </div>
      <p className="fr-text-xs sm:fr-text-sm fr-text-center fr-mt-4 fr-text-brandDarkBlue">
        {subtitle || "Select an option to provide feedback"}
      </p>
    </>
  );
};

export default DefaultView;
