import { SortOrder } from "../../util/SortOrder";

export type StrategyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  gameSessionId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  scenarioId?: SortOrder;
  updatedAt?: SortOrder;
};
