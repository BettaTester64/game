import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ResultUpdateManyWithoutStrategiesInput } from "./ResultUpdateManyWithoutStrategiesInput";
import { ScenarioWhereUniqueInput } from "../scenario/ScenarioWhereUniqueInput";

export type StrategyUpdateInput = {
  description?: string | null;
  gameSession?: GameSessionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  results?: ResultUpdateManyWithoutStrategiesInput;
  scenario?: ScenarioWhereUniqueInput | null;
};
