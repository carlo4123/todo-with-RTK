
import { ListWrapper } from "./styles/TodoList.styled";
import TodoItem from './TodoItem';

const TodoList = ({todos,sort}) => {


 

  return ( 
      <ListWrapper>

        { sort === "all" && todos.map((todo)=> 
          (
         <TodoItem 
            key={todo.id} 
            id={todo.id}
            completed={todo.completed} 
            title={todo.title}>
            </TodoItem>

           )
        )}

        { sort === "active" && todos.map((todo)=> 
          (
            !todo.completed &&
         <TodoItem 
            key={todo.id} 
            id={todo.id}
            completed={todo.completed} 
            title={todo.title}>
            </TodoItem>

           )
        )}

      { sort === "completed" && todos.map((todo)=> 
          (
            todo.completed &&
         <TodoItem 
            key={todo.id} 
            id={todo.id}
            completed={todo.completed} 
            title={todo.title}>
            </TodoItem>

           )
        )}
      </ListWrapper>
   );
}
 
export default TodoList;