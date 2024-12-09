import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";
import { ScenarioWhereUniqueInput } from "../scenario/ScenarioWhereUniqueInput";

export type StrategyWhereInput = {
  description?: StringNullableFilter;
  gameSession?: GameSessionWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  results?: ResultListRelationFilter;
  scenario?: ScenarioWhereUniqueInput;
};
