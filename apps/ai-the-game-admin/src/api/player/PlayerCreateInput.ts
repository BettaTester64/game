import { StrategyCreateNestedManyWithoutPlayersInput } from "./StrategyCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  email?: string | null;
  score?: number | null;
  strategies?: StrategyCreateNestedManyWithoutPlayersInput;
  username?: string | null;
};
