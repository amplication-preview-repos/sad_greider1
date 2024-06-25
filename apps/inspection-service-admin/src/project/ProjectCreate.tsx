import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EngineerTitle } from "../engineer/EngineerTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="engineer.id"
          reference="Engineer"
          label="Engineer"
        >
          <SelectInput optionText={EngineerTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
