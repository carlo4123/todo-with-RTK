import styled from "styled-components";


export const TabWrapper = styled.ul`

  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.8rem;

`

export const TabItem = styled.li`

  background-color: ${({sort,tabName}) => sort === tabName ? "#1363DF" : "#fff"};
  color:${({sort,tabName}) => sort === tabName ? "#fff" : "#06283D"};
  padding: 1.2rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
 
`