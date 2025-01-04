export interface ReviewData {
  body: string;
  rating: number;
  createdAt: number;
  user?: {
    name: string;
    email: string;
  };
  _id: string;
}
