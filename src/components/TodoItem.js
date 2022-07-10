import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/edit.svg';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';
import { Button, Checkbox, ListName, TodoListItem } from "./styles/TodoList.styled";
import UpdateTodo from './UpdateTodo';
const TodoItem = ({id, title,completed}) => {


const dispatch = useDispatch()

const checkboxhandle = () =>{
  dispatch(
    toggleComplete({id,  completed: !completed}) 
  )
}

const deleteHandle = () => {
  dispatch(
    deleteTodo({id})
  )
}

const [modalIndex,setModalIndex] = useState(null)
const updateHandle = index => {
  setModalIndex(index)
}


  return ( 
    <TodoListItem>
      <Checkbox 
      type="checkbox" 
      checked={completed}
      onChange={checkboxhandle}
      id={`${title}-${id}`}
      />
      <ListName htmlFor={`${title}-${id}`} completed={completed}>{title}</ListName>
     
      <Button onClick={() => updateHandle(id)}>
      <img src={EditIcon} alt="edit icon" />
      </Button>
      <Button onClick={deleteHandle}> 
      <img src={DeleteIcon} alt="edit icon" />
      </Button>
      
      {modalIndex === id ? <UpdateTodo id={id} title={title} closeModal={setModalIndex} /> : null}
      
    </TodoListItem>
   );
}
 
export default TodoItem;