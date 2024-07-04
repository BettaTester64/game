import { StrategyUpdateManyWithoutPlayersInput } from "./StrategyUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  email?: string | null;
  score?: number | null;
  strategies?: StrategyUpdateManyWithoutPlayersInput;
  username?: string | null;
};
