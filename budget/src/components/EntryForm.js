import React, { useState, Fragment} from 'react'
import { Form, Segment, Checkbox} from 'semantic-ui-react'

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="New shinny thing"
          width={12}
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      
      {/* <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>OK</Button>
        </Button.Group> */}
      <Segment compact>
        <Checkbox
          checked={isExpense}
          toggle
          label="is Expense"
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm