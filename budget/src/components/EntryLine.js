import React, { useState} from 'react'
import { Container, Segment, Grid, Icon } from 'semantic-ui-react'

function EntryLine({ id, description, value, isExpense = false, deleteEntry, ediEntry }) {
             
            
  
  return (
    <Container>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={ ()=> ediEntry(id)} />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    </Container>
  );
}

export default EntryLine