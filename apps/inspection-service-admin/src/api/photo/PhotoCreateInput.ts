import { InspectionWhereUniqueInput } from "../inspection/InspectionWhereUniqueInput";

export type PhotoCreateInput = {
  caption?: string | null;
  cause?: string | null;
  dimensions?: string | null;
  inspection?: InspectionWhereUniqueInput | null;
  location?: string | null;
  observation?: string | null;
  otherRemarks?: string | null;
  remedialMeasure?: string | null;
  serialNumber?: number | null;
  severity?: string | null;
};
