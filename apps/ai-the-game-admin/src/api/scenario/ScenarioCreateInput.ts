import { StrategyCreateNestedManyWithoutScenariosInput } from "./StrategyCreateNestedManyWithoutScenariosInput";

export type ScenarioCreateInput = {
  description?: string | null;
  strategies?: StrategyCreateNestedManyWithoutScenariosInput;
  title?: string | null;
};
