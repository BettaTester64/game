import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
