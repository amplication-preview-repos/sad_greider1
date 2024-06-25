import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InspectionWhereUniqueInput } from "../inspection/InspectionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PhotoWhereInput = {
  caption?: StringNullableFilter;
  cause?: StringNullableFilter;
  dimensions?: StringNullableFilter;
  id?: StringFilter;
  inspection?: InspectionWhereUniqueInput;
  location?: StringNullableFilter;
  observation?: StringNullableFilter;
  otherRemarks?: StringNullableFilter;
  remedialMeasure?: StringNullableFilter;
  serialNumber?: IntNullableFilter;
  severity?: StringNullableFilter;
};
