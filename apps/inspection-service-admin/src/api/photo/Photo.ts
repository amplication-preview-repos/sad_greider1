import { Inspection } from "../inspection/Inspection";

export type Photo = {
  caption: string | null;
  cause: string | null;
  createdAt: Date;
  dimensions: string | null;
  id: string;
  inspection?: Inspection | null;
  location: string | null;
  observation: string | null;
  otherRemarks: string | null;
  remedialMeasure: string | null;
  serialNumber: number | null;
  severity: string | null;
  updatedAt: Date;
};
