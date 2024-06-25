import { Inspection } from "../inspection/Inspection";
import { Project } from "../project/Project";

export type Engineer = {
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  inspections?: Array<Inspection>;
  licenseNumber: string | null;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
