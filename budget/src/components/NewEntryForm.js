import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonOkOrCancel from './ButtonOkOrCancel';

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="New shinny thing"
          width={12}
          label="Description"
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>
      {/* <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>OK</Button>
        </Button.Group> */}
      <ButtonOkOrCancel />
    </Form>
  );
}

export default NewEntryForm