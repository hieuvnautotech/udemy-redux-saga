import React from 'react'
import { Button} from 'semantic-ui-react'
function ButtonOkOrCancel({ addEntry, value, description }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary onClick={()=>addEntry(description, value)}>OK</Button>
    </Button.Group>
  );
}

export default ButtonOkOrCancel