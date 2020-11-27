import styled from 'styled-components'

export const FormLogin = styled.form`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);

  padding: 1.6rem;

  a {
    margin-top: 1.6rem;
    padding: 0.8rem;
    text-align: center;
  }
`
export const InputForm = styled.input`
  width: 100%;
  margin-bottom: 1.6rem;
  border-radius: 0.4px;
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
