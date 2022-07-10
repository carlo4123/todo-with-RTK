import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '../assets/add.svg';
import { addTodo } from '../redux/todoSlice';
import { Form, Input, PrimaryButton } from "./styles/Form.styled";

const AddTodo = () => {

  const [value,setValue] = useState('')
  const [error,setError] = useState(false)
  const dispatch = useDispatch()
  const submitHandler = (e) =>{
    setValue('')

    e.preventDefault()
    if(value){
      setError(false)
      dispatch(
        addTodo(
          {
            title: value,
          }
        )
      )
    }else{
      
      setError(true)
     
    }
    console.log(error)
  }

  const inputHandler = (e) =>{
    setValue(e.target.value)
    setError(false)
  }
 
  return (
  <Form onSubmit={submitHandler}>
    <div>
    <Input 
    type="text" 
    placeholder='add your new todo' 
    value={value}
    onChange={inputHandler}
    />
    <PrimaryButton>
      <img src={AddIcon} alt="" />
    </PrimaryButton>

 
    </div>
    {error && <p>Please input todo</p> }
  
  </Form>

    );
}
 
export default AddTodo;