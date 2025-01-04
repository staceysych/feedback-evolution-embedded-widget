"use client";

import { IdeaData } from "./types";
import { PlusIcon } from "@heroicons/react/24/solid";
import ProgressTracker from "../ProgressTracker";
import { useCallback, useState } from "react";
import { IDEAS_API } from "../../utils/defaults";
import debounce from "lodash-es/debounce";

interface ProgressCardProps {
  data: IdeaData;
  projectId: string;
  sliderWidth?: number;
}

const ProgressCard = ({
  data,
  projectId,
  sliderWidth = 800,
}: ProgressCardProps) => {
  const { body, votes, progress } = data;
  const [loading, setLoading] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);

  const handleUpVotes = useCallback(
    debounce(async () => {
      const newVotes = currentVotes + 1;
      setLoading(true);
      try {
        const upVotesData = { votes: newVotes, ideaId: data._id };

        const res = await fetch(`${IDEAS_API}/${projectId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(upVotesData),
        });

        if (res.ok) {
          setCurrentVotes(newVotes);
        }
      } finally {
        setLoading(false);
      }
    }, 300),
    [currentVotes, data._id, projectId]
  );

  const buttonClasses =
    "!fr-btn fr-flex fr-flex-col !fr-px-2 !fr-bg-green-600 !fr-bg-opacity-20 !fr-text-brandDarkBlue hover:!fr-bg-green-700 hover:!fr-text-white";

  return (
    <div className="fr fr-flex fr-w-full fr-justify-center">
      <div
        className={`fr-flex fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-p-4 fr-min-w-[300px] fr-w-full fr-gap-4 fr-flex-col md:fr-flex-row`}
        style={{ maxWidth: `${sliderWidth - 100}px` }}
      >
        <button
          className={`${buttonClasses} !fr-hidden md:!fr-flex`}
          style={{ opacity: loading ? 0.5 : 1 }}
          disabled={loading}
          onClick={handleUpVotes}
        >
          <PlusIcon className="fr-size-4" />
          {currentVotes}
        </button>
        <div
          className={`fr-text-sm fr-text-left fr-text-brandDarkBlue fr-overflow-hidden`}
        >
          {body}
        </div>
        <div className="fr-flex fr-justify-between">
          <button
            className={`${buttonClasses} md:!fr-hidden`}
            disabled={loading}
            style={{ opacity: loading ? 0.5 : 1 }}
            onClick={handleUpVotes}
          >
            <PlusIcon className="fr-size-4" />
            {currentVotes}
          </button>
          <div className="fr-flex fr-my-auto fr-ml-auto">
            <ProgressTracker progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
