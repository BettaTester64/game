import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STRATEGY_TITLE_FIELD } from "./StrategyTitle";
import { GAMESESSION_TITLE_FIELD } from "../gameSession/GameSessionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { SCENARIO_TITLE_FIELD } from "../scenario/ScenarioTitle";

export const StrategyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Result"
          target="strategyId"
          label="Results"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="outcome" source="outcome" />
            <ReferenceField
              label="Strategy"
              source="strategy.id"
              reference="Strategy"
            >
              <TextField source={STRATEGY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
