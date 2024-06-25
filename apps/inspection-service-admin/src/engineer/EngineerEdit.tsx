import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InspectionTitle } from "../inspection/InspectionTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const EngineerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="contactInformation"
          multiline
          source="contactInformation"
        />
        <ReferenceArrayInput
          source="inspections"
          reference="Inspection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InspectionTitle} />
        </ReferenceArrayInput>
        <TextInput label="licenseNumber" source="licenseNumber" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="projects"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
