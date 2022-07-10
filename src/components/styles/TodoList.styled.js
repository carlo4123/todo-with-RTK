import styled from "styled-components";


export const ListWrapper = styled.ul`
width: 100%;
display: flex;
gap: 1rem;
flex-direction: column;
`

export const TodoListItem = styled.li`
background-color: ${({theme})=> theme.colors.darkColor};
display: flex;
align-items: center;
gap: 1rem;
padding: 1.2rem;
border-radius: .8rem;

/* & button{
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  
} */
& img{
  height: 2rem;
  width: 2rem;
}



`


export const Checkbox = styled.input`
width: 2rem;
height: 2rem;
cursor: pointer;

`

export const ListName = styled.label`
width: 100%;
/* background-color: transparent;
outline: none;
border: none; */
font-size: 1.8rem;
text-decoration: ${(props)=> props.completed ? "line-through": "none"} ;
color: ${({theme})=> theme.colors.white};
cursor: pointer;

`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-transition: transform 0.5s 0s ease-out;
  -moz-transition: transform 0.5s 0s ease-out;
  -o-transition: transform 0.5s 0s ease-out;
  transition: transform 0.5s 0s ease-out;

  &:hover{
    transform: scale(1.1)
  }
`



