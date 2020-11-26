import styled from 'styled-components'

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

  padding: 1.6rem;
`
export const InputForm = styled.input`
  width: 100%;
  margin-bottom: 1.6rem;
  border-radius: 0.6rem;

  padding: 1.2rem;
  background: var(--color-input-background);
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
