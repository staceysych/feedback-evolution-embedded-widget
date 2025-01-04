import { Progress } from "../../../types/common";

export interface IdeaData {
  body: string;
  votes: number;
  progress: Progress;
  _id: string;
}
