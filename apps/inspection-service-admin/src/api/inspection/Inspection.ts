import { Engineer } from "../engineer/Engineer";
import { Photo } from "../photo/Photo";
import { Structure } from "../structure/Structure";

export type Inspection = {
  comments: string | null;
  createdAt: Date;
  date: Date | null;
  engineer?: Engineer | null;
  id: string;
  photos?: Array<Photo>;
  structure?: Structure | null;
  updatedAt: Date;
};
