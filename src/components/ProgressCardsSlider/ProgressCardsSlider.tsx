import { useEffect, useState } from "react";
import ProgressCard from "../ProgressCard";

import { IDEAS_API } from "../../utils/defaults";

import { IdeaData } from "../ProgressCard/types";

interface ReviewCardsProps {
  projectId: string;
  sliderWidth?: number;
}

const ProgressCardsSlider = ({
  projectId,
  sliderWidth = 800,
}: ReviewCardsProps) => {
  const [data, setData] = useState<IdeaData[][]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const res = await fetch(`${IDEAS_API}/${projectId}/status`);
      const resJson = await res.json();

      const chunkedData = [];
      for (let i = 0; i < resJson.data.length; i += 3) {
        chunkedData.push(resJson.data.slice(i, i + 3));
      }

      setData(chunkedData);
    };

    fetchIdeas();
  }, []);

  return (
    <div className="fr">
      <div className="fr-flex fr-flex-col">
        <div
          className="!fr-carousel fr-rounded-box fr-w-[100vw]"
          style={{ maxWidth: `${sliderWidth}px` }}
        >
          {!!data.length ? (
            data.map((ideaChunk, index) => (
              <div
                key={index}
                id={`slide-progress-${index}`}
                className="!fr-carousel-item fr-relative fr-w-full fr-flex fr-justify-start fr-items-center fr-flex-col fr-gap-6 fr-py-4"
              >
                {ideaChunk?.map((idea) => (
                  <ProgressCard
                    key={idea._id}
                    data={idea}
                    projectId={projectId}
                    sliderWidth={sliderWidth}
                  />
                ))}
              </div>
            ))
          ) : (
            <span className="!fr-loading !fr-loading-dots !fr-loading-lg !fr-bg-brandDarkBlue fr-inline-block fr-mx-auto"></span>
          )}
        </div>
        {data.length > 1 && (
          <div className="fr-flex fr-w-full fr-justify-center fr-gap-2 fr-py-2">
            {data.map((_, index) => (
              <a
                href={`#slide-progress-${index}`}
                className="!fr-btn !fr-btn-xs"
                key={`slide-progress-${index}`}
              >
                {index + 1}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressCardsSlider;
