import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import api from '../../services/api'
import { Container } from '../../styles/global'
import { FormRegister, InputForm, ButtonSubmit } from './styles'

const SignUp: React.FC = () => {
  const [email, setEmail] = useInput('')
  const [name, setName] = useInput('')
  const [password, setPassword] = useInput('')

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('users', {
        name,
        email,
        password
      })
      console.log(response.data)
    } catch (err) {
      if (err.response) {
        console.log('Error: ', err.response.data.message)
      }
    }
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

        <Link to="/">Já possuo uma conta</Link>
      </FormRegister>
    </Container>
  )
}

export default SignUp
