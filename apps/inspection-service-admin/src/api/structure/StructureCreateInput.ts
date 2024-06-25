import { InspectionCreateNestedManyWithoutStructuresInput } from "./InspectionCreateNestedManyWithoutStructuresInput";

export type StructureCreateInput = {
  address?: string | null;
  description?: string | null;
  inspections?: InspectionCreateNestedManyWithoutStructuresInput;
  typeField?: string | null;
};
