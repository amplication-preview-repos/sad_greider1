import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type InspectionWhereInput = {
  comments?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  engineer?: EngineerWhereUniqueInput;
  id?: StringFilter;
  photos?: PhotoListRelationFilter;
  structure?: StructureWhereUniqueInput;
};
