import styled from "styled-components";

export const Form = styled.form`

width: 100%;
margin-bottom: 2.4rem;
width: 100%;

& > div{
  display: flex;
  align-content: stretch;
  gap: 1rem;
}

& > p{
  margin-top: 0.8rem;
  font-size: 1.6rem;
  color: ${({theme})=> theme.colors.red};
  
}

`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #06283D;
  border-radius: .8rem;
  padding: 1.2rem 1.4rem;
  font-size: 1.8rem;
  &::-webkit-input-placeholder {
    color: ${({theme})=> theme.colors.gray};
  } 
`

export  const PrimaryButton = styled.button`
background-color: ${({theme}) => theme.colors.darkBlue};
border-radius: .8rem;
padding: 0 1.8rem;
color: ${({theme}) => theme.colors.white};
border: ${({theme}) => theme.colors.darkBlue};
cursor: pointer;

& img{
  width: 2rem;
  height: 2rem;
}
`

export  const SecondaryButton = styled(PrimaryButton)`
background-color: ${({theme}) => theme.colors.red};
`