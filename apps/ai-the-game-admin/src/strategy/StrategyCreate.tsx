import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GameSessionTitle } from "../gameSession/GameSessionTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { ResultTitle } from "../result/ResultTitle";
import { ScenarioTitle } from "../scenario/ScenarioTitle";

export const StrategyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="gameSession.id"
          reference="GameSession"
          label="GameSession"
        >
          <SelectInput optionText={GameSessionTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="results"
          reference="Result"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResultTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="scenario.id"
          reference="Scenario"
          label="Scenario"
        >
          <SelectInput optionText={ScenarioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
