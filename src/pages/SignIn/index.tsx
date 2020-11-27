import React, { FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import api from '../../services/api'
import { Container, Header } from '../../styles/global'
import { FormLogin, InputForm, ButtonSubmit } from './styles'

const SignIn: React.FC = () => {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  const history = useHistory()

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/login', { email, password })
      const { token } = data.data
      sessionStorage.setItem('jwt_token', token)
      history.replace('/home')
    } catch (err) {
      alert('Usuário ou senha inválidos!')
    }
  }

  return (
    <Container>
      <Header>
        <h2>Login</h2>
      </Header>
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
