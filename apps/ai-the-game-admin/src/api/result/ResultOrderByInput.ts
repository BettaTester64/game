import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  outcome?: SortOrder;
  strategyId?: SortOrder;
  updatedAt?: SortOrder;
};
