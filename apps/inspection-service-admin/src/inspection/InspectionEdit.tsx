import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EngineerTitle } from "../engineer/EngineerTitle";
import { PhotoTitle } from "../photo/PhotoTitle";
import { StructureTitle } from "../structure/StructureTitle";

export const InspectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="engineer.id"
          reference="Engineer"
          label="Engineer"
        >
          <SelectInput optionText={EngineerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="photos"
          reference="Photo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhotoTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
