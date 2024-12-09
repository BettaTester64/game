import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type ResultCreateInput = {
  description?: string | null;
  outcome?: "Option1" | null;
  strategy?: StrategyWhereUniqueInput | null;
};
