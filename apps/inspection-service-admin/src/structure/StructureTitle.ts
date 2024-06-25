import { Structure as TStructure } from "../api/structure/Structure";

export const STRUCTURE_TITLE_FIELD = "typeField";

export const StructureTitle = (record: TStructure): string => {
  return record.typeField?.toString() || String(record.id);
};
