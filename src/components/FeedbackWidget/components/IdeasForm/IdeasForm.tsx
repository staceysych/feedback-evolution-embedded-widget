import React, { useState } from "react";

import SubmitButton from "../../../SubmitButton";
import { IDEAS_API } from "../../../../utils/defaults";
import { IUser } from "../../types";

interface ReviewFormProps {
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
}

const IdeasForm = ({ onSubmit, projectId, user }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [useEmail, setUseEmail] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const enableSubmit = review.length > 0 && category;

  const handleSubmit = async (email?: string) => {
    setLoading(true);
    const ideaData = {
      body: review,
      category,
      user: user || email ? {
        email: email || user?.email,
        name: user?.name,
      } : undefined,
    };
    await fetch(`${IDEAS_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ ideaData }),
    });
    setLoading(false);
    onSubmit();
  };

  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-gap-1 fr-w-full fr-h-full fr-justify-between">
      <h2 className="fr-text-md fr-font-bold">Share your idea</h2>

      <div className="fr-form-control fr-w-full">
        <textarea
          autoFocus
          className="fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full"
          placeholder="Got a great idea? Let us know how we can make things better!"
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <div className="fr-form-control fr-w-full">
        <select
          className="fr-inline-flex fr-h-[36px] fr-p-2 fr-text-sm fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-w-full"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Feature">Feature</option>
          <option value="Improvement">Improvement</option>
          <option value="UI">UI/UX</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <SubmitButton
        onSubmit={enableSubmit ? handleSubmit : undefined}
        loading={loading}
        enableEmail={!user}
        useEmail={useEmail}
        onToggleEmail={setUseEmail}
      />
    </div>
  );
};

export default IdeasForm;
