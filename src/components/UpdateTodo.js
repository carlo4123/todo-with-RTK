import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import { Form, Input, PrimaryButton, SecondaryButton } from "./styles/Form.styled";
import { Modal } from "./styles/Modal.styled";
import { TodoBox } from './styles/TodoBox.styled';


const UpdateTodo = ({id,title ,closeModal}) => {

  const [newTitle,setNewTitle] = useState(title)

 const dispatch = useDispatch()

  const inputHandler = (e) => {
    console.log(newTitle)
    setNewTitle(e.target.value)
  }

  const cancelHandle = (e) =>{
    e.preventDefault()
    closeModal(null)
  }

  const updateHandle = (e) =>{
    e.preventDefault()
    closeModal(null)

    dispatch(
      updateTodo({id, title: newTitle})
    )
   
  }
  return ( 
    <Modal>
     <TodoBox>

     
   <Form>
    <div>
    <Input  type="text"  value={newTitle}  onChange={inputHandler}/>
    <PrimaryButton onClick={updateHandle} >
      Update
      </PrimaryButton> 

      <SecondaryButton onClick={cancelHandle} >
      Cancel
      </SecondaryButton> 
      </div>
   </Form>
   </TodoBox>
  
    </Modal>
   );
}
 
export default UpdateTodo;