import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StrategyListRelationFilter } from "../strategy/StrategyListRelationFilter";

export type PlayerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
  strategies?: StrategyListRelationFilter;
  username?: StringNullableFilter;
};
