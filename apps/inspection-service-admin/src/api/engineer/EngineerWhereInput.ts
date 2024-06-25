import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InspectionListRelationFilter } from "../inspection/InspectionListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type EngineerWhereInput = {
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  inspections?: InspectionListRelationFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
};
