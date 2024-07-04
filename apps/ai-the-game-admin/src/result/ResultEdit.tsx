import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StrategyTitle } from "../strategy/StrategyTitle";

export const ResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
