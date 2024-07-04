import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type ResultWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  outcome?: "Option1";
  strategy?: StrategyWhereUniqueInput;
};
