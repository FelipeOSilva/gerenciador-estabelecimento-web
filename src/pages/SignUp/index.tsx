import React, { FormEvent } from 'react'
import { useInput } from '../../hooks/useInput'
import { Container } from '../../styles/global'
import { FormRegister, InputForm, ButtonSubmit } from './styles'

const SignUp: React.FC = () => {
  const [email, setEmail] = useInput('')
  const [name, setName] = useInput('')
  const [password, setPassword] = useInput('')

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault()
    return true
  }

  return (
    <Container>
      <FormRegister onSubmit={handleSignUp}>
        <InputForm
          placeholder="Nome"
          type="text"
          value={name}
          onChange={setName}
        />
        <InputForm
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={setEmail}
        />
        <InputForm
          placeholder="Senha"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </FormRegister>
    </Container>
  )
}

export default SignUp
