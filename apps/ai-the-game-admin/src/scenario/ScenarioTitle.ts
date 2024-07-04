import { Scenario as TScenario } from "../api/scenario/Scenario";

export const SCENARIO_TITLE_FIELD = "title";

export const ScenarioTitle = (record: TScenario): string => {
  return record.title?.toString() || String(record.id);
};
