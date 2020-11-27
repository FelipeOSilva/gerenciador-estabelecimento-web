import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FormNewEstablishment = styled.form`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);

  padding: 1.6rem;
  input{
    width: 100%;
    padding: 0.8rem;
  }
`

export const InputForm = styled.input`
  width: 100%;
  margin-bottom: 1.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-input-background);
  padding: 1.6rem;
`

export const ButtonSubmit = styled.button`
  background: var(--color-primary);
  border-radius: 1rem;
  padding: 1.6rem;
  font-size: 2rem;
  font-weight: 700;

  margin-top: 0.8rem;
  color: var(--color-white);

  &:active{
    opacity: 0.85;
  }

  &:disabled{
    opacity: 0.5;
  }
`
export const BackButton = styled(LinkR)`
  padding: 1rem;
  border-radius: 0.4rem;
  background: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  text-align: center;
`

export const EstablishmentsArea = styled.div`
  width: 100%;
  background: var(--color-white);
  padding: 1rem 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const EstablishmentItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.6rem 0.8rem;
  font-size: 1.8rem;
  border-bottom: 1px solid var(--color-primary);

  span{
    font-weight: bold
  }

  div{
    button{
      padding: 0.8rem;
      background: var(--color-red);
      color: var(--color-white);
      &:first-child{
        background: var(--color-yellow);
        margin-right: 0.8rem;
      }
    }
  }
`
