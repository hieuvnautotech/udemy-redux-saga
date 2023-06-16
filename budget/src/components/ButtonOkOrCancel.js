import React from 'react'
import { Button} from 'semantic-ui-react'
function ButtonOkOrCancel({ addEntry, value, description, isExpense }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary onClick={() => addEntry(description, value, isExpense)}>
        OK
      </Button>
    </Button.Group>
  );
}

export default ButtonOkOrCancel