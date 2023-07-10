import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import { useDispatch} from 'react-redux'
import {closeEditModal} from '../actions/modals.actions'

function ModalEdit({ 
  isOpen, 
  description, 
  value, 
  isExpense, 
  setDescription,
  setValue,
  setIsExpense,
  setIsOpen
  }) {
  
  const dispatch = useDispatch()
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
              <Button onClick={()=>dispatch(closeEditModal())}>Close</Button>
              <Button onClick={()=>dispatch(closeEditModal())} primary>OK</Button>
          </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit