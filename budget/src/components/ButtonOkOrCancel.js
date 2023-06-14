import React from 'react'
import { Button} from 'semantic-ui-react'
function ButtonOkOrCancel() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary>OK</Button>
    </Button.Group>
  );
}

export default ButtonOkOrCancel