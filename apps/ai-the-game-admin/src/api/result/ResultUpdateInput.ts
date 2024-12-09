import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type ResultUpdateInput = {
  description?: string | null;
  outcome?: "Option1" | null;
  strategy?: StrategyWhereUniqueInput | null;
};
