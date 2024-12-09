import { StrategyUpdateManyWithoutGameSessionsInput } from "./StrategyUpdateManyWithoutGameSessionsInput";

export type GameSessionUpdateInput = {
  name?: string | null;
  status?: "Option1" | null;
  strategies?: StrategyUpdateManyWithoutGameSessionsInput;
};
