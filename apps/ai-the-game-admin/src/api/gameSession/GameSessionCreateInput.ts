import { StrategyCreateNestedManyWithoutGameSessionsInput } from "./StrategyCreateNestedManyWithoutGameSessionsInput";

export type GameSessionCreateInput = {
  name?: string | null;
  status?: "Option1" | null;
  strategies?: StrategyCreateNestedManyWithoutGameSessionsInput;
};
