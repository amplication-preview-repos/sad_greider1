import { InspectionUpdateManyWithoutStructuresInput } from "./InspectionUpdateManyWithoutStructuresInput";

export type StructureUpdateInput = {
  address?: string | null;
  description?: string | null;
  inspections?: InspectionUpdateManyWithoutStructuresInput;
  typeField?: string | null;
};
