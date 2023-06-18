import React from 'react'
import { Button} from 'semantic-ui-react'
function ButtonOkOrCancel({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary onClick={() => addEntry()}>
        OK
      </Button>
    </Button.Group>
  );
}

export default ButtonOkOrCancel