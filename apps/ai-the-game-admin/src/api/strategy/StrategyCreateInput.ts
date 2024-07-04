import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ResultCreateNestedManyWithoutStrategiesInput } from "./ResultCreateNestedManyWithoutStrategiesInput";
import { ScenarioWhereUniqueInput } from "../scenario/ScenarioWhereUniqueInput";

export type StrategyCreateInput = {
  description?: string | null;
  gameSession?: GameSessionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  results?: ResultCreateNestedManyWithoutStrategiesInput;
  scenario?: ScenarioWhereUniqueInput | null;
};
