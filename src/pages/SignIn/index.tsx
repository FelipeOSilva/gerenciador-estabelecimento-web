import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import { Container } from '../../styles/global'
import { FormLogin, InputForm, ButtonSubmit } from './styles'

const SignIn: React.FC = () => {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault()
    return true
  }

  return (
    <Container>
      <FormLogin onSubmit={handleSignIn}>
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
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
        <Link to="/signup">Criar uma conta</Link>
      </FormLogin>
    </Container>
  )
}

export default SignIn
