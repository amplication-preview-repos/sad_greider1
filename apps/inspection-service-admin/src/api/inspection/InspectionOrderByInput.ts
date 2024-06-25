import { SortOrder } from "../../util/SortOrder";

export type InspectionOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  engineerId?: SortOrder;
  id?: SortOrder;
  structureId?: SortOrder;
  updatedAt?: SortOrder;
};
