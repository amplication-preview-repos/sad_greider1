import { InspectionUpdateManyWithoutEngineersInput } from "./InspectionUpdateManyWithoutEngineersInput";
import { ProjectUpdateManyWithoutEngineersInput } from "./ProjectUpdateManyWithoutEngineersInput";

export type EngineerUpdateInput = {
  contactInformation?: string | null;
  inspections?: InspectionUpdateManyWithoutEngineersInput;
  licenseNumber?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutEngineersInput;
};
