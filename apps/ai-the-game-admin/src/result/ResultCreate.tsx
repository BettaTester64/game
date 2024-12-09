import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StrategyTitle } from "../strategy/StrategyTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="outcome"
          label="outcome"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="strategy.id"
          reference="Strategy"
          label="Strategy"
        >
          <SelectInput optionText={StrategyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
