import React, { useState} from 'react'
import { Form, Segment, Checkbox } from 'semantic-ui-react'
import ButtonOkOrCancel from './ButtonOkOrCancel';


function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  return (
    <Form unstackable>
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
      <ButtonOkOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
}

export default NewEntryForm