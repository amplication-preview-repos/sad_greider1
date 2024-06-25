import { Inspection } from "../inspection/Inspection";

export type Structure = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inspections?: Array<Inspection>;
  typeField: string | null;
  updatedAt: Date;
};
