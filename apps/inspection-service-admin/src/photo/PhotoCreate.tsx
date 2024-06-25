import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { InspectionTitle } from "../inspection/InspectionTitle";

export const PhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="caption" source="caption" />
        <TextInput label="cause" multiline source="cause" />
        <TextInput label="dimensions" source="dimensions" />
        <ReferenceInput
          source="inspection.id"
          reference="Inspection"
          label="Inspection"
        >
          <SelectInput optionText={InspectionTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <TextInput label="observation" multiline source="observation" />
        <TextInput label="otherRemarks" multiline source="otherRemarks" />
        <TextInput label="remedialMeasure" multiline source="remedialMeasure" />
        <NumberInput step={1} label="serialNumber" source="serialNumber" />
        <TextInput label="severity" source="severity" />
      </SimpleForm>
    </Create>
  );
};
