import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";
import { PhotoCreateNestedManyWithoutInspectionsInput } from "./PhotoCreateNestedManyWithoutInspectionsInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type InspectionCreateInput = {
  comments?: string | null;
  date?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  photos?: PhotoCreateNestedManyWithoutInspectionsInput;
  structure?: StructureWhereUniqueInput | null;
};
