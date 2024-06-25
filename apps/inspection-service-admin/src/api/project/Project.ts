import { Engineer } from "../engineer/Engineer";

export type Project = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  engineer?: Engineer | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
