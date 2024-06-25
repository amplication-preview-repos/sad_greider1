import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INSPECTION_TITLE_FIELD } from "../inspection/InspectionTitle";

export const PhotoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Photos"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
