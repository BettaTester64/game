import { StrategyUpdateManyWithoutScenariosInput } from "./StrategyUpdateManyWithoutScenariosInput";

export type ScenarioUpdateInput = {
  description?: string | null;
  strategies?: StrategyUpdateManyWithoutScenariosInput;
  title?: string | null;
};
