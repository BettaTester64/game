import { Strategy } from "../strategy/Strategy";

export type Scenario = {
  createdAt: Date;
  description: string | null;
  id: string;
  strategies?: Array<Strategy>;
  title: string | null;
  updatedAt: Date;
};
