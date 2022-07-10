
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { ThemeProvider } from 'styled-components';
import AddTodo from './components/addTodo';

import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

import { TitleStyle, TodoBox } from './components/styles/TodoBox.styled';
import TabContainer from './components/TabContainer';
import TodoList from './components/TodoList';

const theme = {
  colors: {
    darkBlue: '#1363DF',
    lightBlue: '#47B5FF',
    darkColor: '#06283D',
    gray: '#7C7C7C',
    white: '#fff',
    black: '#000',
    red: '#FF5151',
  },
  mobile: '768px',
}


function App() {

  const todos = useSelector(state => state.todos)

  const [sort, setSort] = useState('all')

console.log(sort)

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles/>
      <Container>
        <TitleStyle>Todo App</TitleStyle>
          <TodoBox>

           <TabContainer sort={sort} setSort={setSort}/>

           <AddTodo/>

           <TodoList todos={todos} sort={sort}/>


          </TodoBox>
      </Container>
   </ThemeProvider>
  );
}

export default App;
