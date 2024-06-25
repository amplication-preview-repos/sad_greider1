import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INSPECTION_TITLE_FIELD } from "./InspectionTitle";
import { ENGINEER_TITLE_FIELD } from "../engineer/EngineerTitle";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";

export const InspectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="Engineer"
          source="engineer.id"
          reference="Engineer"
        >
          <TextField source={ENGINEER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Photo"
          target="inspectionId"
          label="Photos"
        >
          <Datagrid rowClick="show">
            <TextField label="caption" source="caption" />
            <TextField label="cause" source="cause" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dimensions" source="dimensions" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Inspection"
              source="inspection.id"
              reference="Inspection"
            >
              <TextField source={INSPECTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="location" source="location" />
            <TextField label="observation" source="observation" />
            <TextField label="otherRemarks" source="otherRemarks" />
            <TextField label="remedialMeasure" source="remedialMeasure" />
            <TextField label="serialNumber" source="serialNumber" />
            <TextField label="severity" source="severity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
