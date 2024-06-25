import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  engineer?: EngineerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
