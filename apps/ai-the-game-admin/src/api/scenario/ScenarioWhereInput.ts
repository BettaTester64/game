import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StrategyListRelationFilter } from "../strategy/StrategyListRelationFilter";

export type ScenarioWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  strategies?: StrategyListRelationFilter;
  title?: StringNullableFilter;
};
