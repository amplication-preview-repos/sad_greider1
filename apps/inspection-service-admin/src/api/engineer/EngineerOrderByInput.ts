import { SortOrder } from "../../util/SortOrder";

export type EngineerOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
