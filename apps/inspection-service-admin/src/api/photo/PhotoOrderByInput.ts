import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  caption?: SortOrder;
  cause?: SortOrder;
  createdAt?: SortOrder;
  dimensions?: SortOrder;
  id?: SortOrder;
  inspectionId?: SortOrder;
  location?: SortOrder;
  observation?: SortOrder;
  otherRemarks?: SortOrder;
  remedialMeasure?: SortOrder;
  serialNumber?: SortOrder;
  severity?: SortOrder;
  updatedAt?: SortOrder;
};
