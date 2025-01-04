import { FeedbackType, IUser } from "../../types";

import ReviewForm from "../ReviewForm";
import DefaultView from "../DefaultView";
import IdeasForm from "../IdeasForm";
import IssuesForm from "../IssuesForm";

interface FeedbackContentProps {
  feedbackType: FeedbackType | undefined;
  setFeedbackType: (type: FeedbackType) => void;
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
}

const FeedbackContent = ({
  feedbackType,
  projectId,
  user,
  setFeedbackType,
  onSubmit,
}: FeedbackContentProps) => {
  switch (feedbackType) {
    case FeedbackType.Review:
      return (
        <ReviewForm onSubmit={onSubmit} projectId={projectId} user={user} />
      );
    case FeedbackType.Idea:
      return (
        <IdeasForm onSubmit={onSubmit} projectId={projectId} user={user} />
      );
    case FeedbackType.Issue:
      return (
        <IssuesForm onSubmit={onSubmit} projectId={projectId} user={user} />
      );
    default:
      return <DefaultView setFeedbackType={setFeedbackType} />;
  }
};

export default FeedbackContent;
