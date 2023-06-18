import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, setIsOpen, description, setDescription, value, setValue, isExpense, setIsExpense}) {
  return (
      <Modal open={ isOpen}>
          <Modal.Header>Edit entry</Modal.Header>
          <Modal.Content>
              {/* <Modal.Description>asdasdas</Modal.Description> */}
              <EntryForm
                description={description}
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
              />
          </Modal.Content>
          <Modal.Actions>
              <Button onClick={()=>setIsOpen(false)}>Close</Button>
              <Button onClick={()=>setIsOpen(false)} primary>OK</Button>
          </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit