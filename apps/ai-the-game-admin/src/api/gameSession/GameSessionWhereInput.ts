import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StrategyListRelationFilter } from "../strategy/StrategyListRelationFilter";

export type GameSessionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  strategies?: StrategyListRelationFilter;
};
