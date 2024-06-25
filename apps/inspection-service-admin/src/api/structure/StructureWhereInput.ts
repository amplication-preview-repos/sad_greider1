import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InspectionListRelationFilter } from "../inspection/InspectionListRelationFilter";

export type StructureWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inspections?: InspectionListRelationFilter;
  typeField?: StringNullableFilter;
};
