import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  name?: string | null;
  startDate?: Date | null;
};
