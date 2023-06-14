import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance';
function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income"
              value="11111"
              size="tiny"
              color="green"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expense"
              value="22222"
              color="red"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances