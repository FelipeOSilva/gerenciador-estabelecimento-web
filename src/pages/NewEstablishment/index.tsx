import React, { FormEvent, useEffect, useState } from 'react'
import api from '../../services/api'
import { fetchLocalMapBox } from '../../services/apiMapBox'
import { Container, Header } from '../../styles/global'
import {
  FormNewEstablishment,
  InputForm,
  ButtonSubmit,
  BackButton,
  EstablishmentsArea,
  EstablishmentItem
} from './styles'
import AsyncSelect from 'react-select/async'
import { AxiosResponse } from 'axios'

type Position = {
  latitude: number
  longitude: number
}

interface Establishment {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
  distance?: number
}

const NewEstablishment: React.FC = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([])
  const [establishmentName, setEstablishmentName] = useState<string>('')
  const [establishmentIdEdit, setEstablishmentIdEdit] = useState<number | null>(
    null
  )
  const [
    establishmentDescription,
    setEstablishmentDescription
  ] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [
    establishmentPosition,
    setEstablishmentPosition
  ] = useState<Position | null>(null)

  const [address, setAddress] = useState<{
    label: string
    value: string
  } | null>(null)

  useEffect(() => {
    loadEstablishments()
  }, [])

  const loadEstablishments = () => {
    api
      .get('establishments')
      .then((response: AxiosResponse<{ data: Establishment[] }>) => {
        setEstablishments(response.data.data)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }

  const loadOptions = async (inputValue: string, callback: any) => {
    const response = await fetchLocalMapBox(inputValue)
    const places: any = []
    if (inputValue.length < 5) return
    response.features.map((item: any) =>
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name
      })
    )
    callback(places)
  }

  const handleChangeSelect = (event: any) => {
    console.log('changed', event)
    setEstablishmentPosition({
      longitude: event.coords[0],
      latitude: event.coords[1]
    })
    setAddress({ label: event.place, value: event.place })
  }

  const handleNewEstablishment = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('establishments', {
        name: establishmentName,
        description: establishmentDescription,
        ...establishmentPosition
      })
      loadEstablishments()
      alert('Estabelecimento cadastrado com sucesso!')
    } catch (err) {
      if (err.response) {
        alert('Erro ao cadastrar o estabelecimento, por favor tente novamente!')
      }
    }
  }

  const handleDeleteEstablishment = async (id: number) => {
    try {
      await api.delete(`establishments/${id}`)
      loadEstablishments()
      alert('Estabelecimento deletado com sucesso')
    } catch (err) {
      if (err.response) {
        alert('Erro ao deletar o estabelecimento, por favor tente novamente!')
      }
    }
    console.log(establishmentPosition)
  }

  const handleEditEstablishment = (establishment: Establishment) => {
    setIsEditing(true)
    setEstablishmentIdEdit(establishment.id)
    setEstablishmentName(establishment.name)
    setEstablishmentDescription(establishment.description)
    setEstablishmentPosition({
      latitude: establishment.latitude,
      longitude: establishment.longitude
    })
    setAddress(null)
  }

  const handleEditEstablishmentSubmit = async (e: FormEvent) => {
    try {
      await api.put(`establishments/${establishmentIdEdit}`, {
        name: establishmentName,
        description: establishmentDescription,
        ...establishmentPosition
      })
      loadEstablishments()
      alert('Estabelecimento atualizado com sucesso')
    } catch (err) {
      if (err.response) {
        alert('Erro ao atualizar o estabelecimento, por favor tente novamente!')
      }
    }
    console.log(establishmentPosition)
  }
  return (
    <Container>
      <Header>
        <h2>Novo Estabelecimento</h2>
        <BackButton to="/home">Voltar</BackButton>
      </Header>
      <FormNewEstablishment
        onSubmit={
          isEditing ? handleEditEstablishmentSubmit : handleNewEstablishment
        }
        className="landing-page-form"
      >
        <label htmlFor="name">Nome</label>
        <InputForm
          id="name"
          placeholder="Nome do estabelecimento"
          value={establishmentName}
          onChange={(e) => setEstablishmentName(e.target.value)}
        />

        <label htmlFor="name">Descrição</label>
        <InputForm
          id="name"
          placeholder="Descrição do estabelecimento..."
          value={establishmentDescription}
          onChange={(e) => setEstablishmentDescription(e.target.value)}
        />
        <label htmlFor="address">Endereço</label>
        <AsyncSelect
          placeholder="Endereço do estabelecimento"
          classNamePrefix="filter"
          cacheOptions
          loadOptions={loadOptions}
          onChange={handleChangeSelect}
          value={address}
        />
        <ButtonSubmit className="confirm-button" type="submit">
          Salvar
        </ButtonSubmit>
      </FormNewEstablishment>
      <EstablishmentsArea>
        {establishments?.map((establishment) => (
          <EstablishmentItem key={establishment.id}>
            <span>{establishment.name}</span>
            <div>
              <button onClick={() => handleEditEstablishment(establishment)}>
                Editar
              </button>
              <button
                onClick={() => handleDeleteEstablishment(establishment.id)}
              >
                Deletar
              </button>
            </div>
          </EstablishmentItem>
        ))}
      </EstablishmentsArea>
    </Container>
  )
}

export default NewEstablishment
