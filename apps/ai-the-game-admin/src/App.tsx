import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { GameSessionList } from "./gameSession/GameSessionList";
import { GameSessionCreate } from "./gameSession/GameSessionCreate";
import { GameSessionEdit } from "./gameSession/GameSessionEdit";
import { GameSessionShow } from "./gameSession/GameSessionShow";
import { StrategyList } from "./strategy/StrategyList";
import { StrategyCreate } from "./strategy/StrategyCreate";
import { StrategyEdit } from "./strategy/StrategyEdit";
import { StrategyShow } from "./strategy/StrategyShow";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { ScenarioList } from "./scenario/ScenarioList";
import { ScenarioCreate } from "./scenario/ScenarioCreate";
import { ScenarioEdit } from "./scenario/ScenarioEdit";
import { ScenarioShow } from "./scenario/ScenarioShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"AiTheGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="GameSession"
          list={GameSessionList}
          edit={GameSessionEdit}
          create={GameSessionCreate}
          show={GameSessionShow}
        />
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
        <Resource
          name="Scenario"
          list={ScenarioList}
          edit={ScenarioEdit}
          create={ScenarioCreate}
          show={ScenarioShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
