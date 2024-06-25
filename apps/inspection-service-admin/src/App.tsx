import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { InspectionList } from "./inspection/InspectionList";
import { InspectionCreate } from "./inspection/InspectionCreate";
import { InspectionEdit } from "./inspection/InspectionEdit";
import { InspectionShow } from "./inspection/InspectionShow";
import { EngineerList } from "./engineer/EngineerList";
import { EngineerCreate } from "./engineer/EngineerCreate";
import { EngineerEdit } from "./engineer/EngineerEdit";
import { EngineerShow } from "./engineer/EngineerShow";
import { StructureList } from "./structure/StructureList";
import { StructureCreate } from "./structure/StructureCreate";
import { StructureEdit } from "./structure/StructureEdit";
import { StructureShow } from "./structure/StructureShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Inspection Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="Inspection"
          list={InspectionList}
          edit={InspectionEdit}
          create={InspectionCreate}
          show={InspectionShow}
        />
        <Resource
          name="Engineer"
          list={EngineerList}
          edit={EngineerEdit}
          create={EngineerCreate}
          show={EngineerShow}
        />
        <Resource
          name="Structure"
          list={StructureList}
          edit={StructureEdit}
          create={StructureCreate}
          show={StructureShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
      </Admin>
    </div>
  );
};

export default App;
