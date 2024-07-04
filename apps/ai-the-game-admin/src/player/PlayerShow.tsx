import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAMESESSION_TITLE_FIELD } from "../gameSession/GameSessionTitle";
import { PLAYER_TITLE_FIELD } from "./PlayerTitle";
import { SCENARIO_TITLE_FIELD } from "../scenario/ScenarioTitle";

export const PlayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Strategy"
          target="playerId"
          label="Strategies"
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
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
