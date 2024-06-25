import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "caption";

export const PhotoTitle = (record: TPhoto): string => {
  return record.caption?.toString() || String(record.id);
};
