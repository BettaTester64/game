import { Strategy } from "../strategy/Strategy";

export type Result = {
  createdAt: Date;
  description: string | null;
  id: string;
  outcome?: "Option1" | null;
  strategy?: Strategy | null;
  updatedAt: Date;
};
