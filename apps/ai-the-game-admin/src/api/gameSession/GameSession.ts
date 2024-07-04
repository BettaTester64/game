import { Strategy } from "../strategy/Strategy";

export type GameSession = {
  createdAt: Date;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  strategies?: Array<Strategy>;
  updatedAt: Date;
};
