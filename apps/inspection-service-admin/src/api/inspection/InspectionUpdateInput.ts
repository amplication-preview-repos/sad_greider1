import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";
import { PhotoUpdateManyWithoutInspectionsInput } from "./PhotoUpdateManyWithoutInspectionsInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type InspectionUpdateInput = {
  comments?: string | null;
  date?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  photos?: PhotoUpdateManyWithoutInspectionsInput;
  structure?: StructureWhereUniqueInput | null;
};
