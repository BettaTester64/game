import { Strategy as TStrategy } from "../api/strategy/Strategy";

export const STRATEGY_TITLE_FIELD = "id";

export const StrategyTitle = (record: TStrategy): string => {
  return record.id?.toString() || String(record.id);
};
