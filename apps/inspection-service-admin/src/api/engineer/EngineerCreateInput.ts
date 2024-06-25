import { InspectionCreateNestedManyWithoutEngineersInput } from "./InspectionCreateNestedManyWithoutEngineersInput";
import { ProjectCreateNestedManyWithoutEngineersInput } from "./ProjectCreateNestedManyWithoutEngineersInput";

export type EngineerCreateInput = {
  contactInformation?: string | null;
  inspections?: InspectionCreateNestedManyWithoutEngineersInput;
  licenseNumber?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutEngineersInput;
};
