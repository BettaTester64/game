import { Strategy } from "../strategy/Strategy";

export type Player = {
  createdAt: Date;
  email: string | null;
  id: string;
  score: number | null;
  strategies?: Array<Strategy>;
  updatedAt: Date;
  username: string | null;
};
