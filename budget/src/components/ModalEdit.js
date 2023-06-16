import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import NewEntryForm from './NewEntryForm'

function ModalEdit({ isOpen, setIsOpen}) {
  return (
      <Modal open={ isOpen}>
          <Modal.Header>Edit entry</Modal.Header>
          <Modal.Content>
              {/* <Modal.Description>asdasdas</Modal.Description> */}
              <NewEntryForm title/>
          </Modal.Content>
          <Modal.Actions>
              <Button onClick={()=>setIsOpen(false)}>Close</Button>
          </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit