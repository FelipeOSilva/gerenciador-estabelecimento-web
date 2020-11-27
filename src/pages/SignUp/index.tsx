import React, { FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import api from '../../services/api'
import { Container, Header } from '../../styles/global'
import { FormRegister, InputForm, ButtonSubmit } from './styles'

const SignUp: React.FC = () => {
  const [email, setEmail] = useInput('')
  const [name, setName] = useInput('')
  const [password, setPassword] = useInput('')
  const history = useHistory()
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('users', {
        name,
        email,
        password
      })
      alert('Usuário cadastrado com sucesso!')
      history.replace('/')
      console.log(response.data)
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Não foi possível cadastrar novo usuário!')
      }
    }
  }

  return (
    <Container>
      <Header>
        <h2>Cadastre-se</h2>
      </Header>
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

        <Link to="/">Já possuo uma conta</Link>
      </FormRegister>
    </Container>
  )
}

export default SignUp
