import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMESESSION_TITLE_FIELD } from "../gameSession/GameSessionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { SCENARIO_TITLE_FIELD } from "../scenario/ScenarioTitle";

export const StrategyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Strategies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="GameSession"
          source="gamesession.id"
          reference="GameSession"
        >
          <TextField source={GAMESESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Scenario"
          source="scenario.id"
          reference="Scenario"
        >
          <TextField source={SCENARIO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
