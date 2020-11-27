import React, { FormEvent, useState } from 'react'
import { useInput } from '../../hooks/useInput'
import api from '../../services/api'
import { fetchLocalMapBox } from '../../services/apiMapBox'
import { Container } from '../../styles/global'
import { FormNewEstablishment, InputForm, ButtonSubmit } from './styles'
import AsyncSelect from 'react-select/async'

type Position = {
  latitude: number
  longitude: number
}

const NewEstablishment: React.FC = () => {
  const [establishmentName, setEstablishmentName] = useInput('')
  const [establishmentDescription, setEstablishmentDescription] = useInput('')
  const [
    establishmentPosition,
    setEstablishmentPosition
  ] = useState<Position | null>(null)

  const [address, setAddress] = useState<{
    label: string
    value: string
  } | null>(null)

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
      console.log(response.data)
    } catch (err) {
      if (err.response) {
        console.log('Error: ', err.response.data.message)
      }
    }
    console.log(establishmentPosition)
  }

  return (
    <Container>
      <FormNewEstablishment
        onSubmit={handleNewEstablishment}
        className="landing-page-form"
      >
        <label htmlFor="name">Nome</label>
        <InputForm
          id="name"
          placeholder="Nome do estabelecimento"
          value={establishmentName}
          onChange={setEstablishmentName}
        />

        <label htmlFor="name">Descrição</label>
        <InputForm
          id="name"
          placeholder="Descrição do estabelecimento..."
          value={establishmentDescription}
          onChange={setEstablishmentDescription}
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
        {establishmentPosition && (
          <>
            <label htmlFor="latitude">Latitude</label>
            <InputForm
              id="latitude"
              value={establishmentPosition.latitude}
              readOnly
            />
            <label htmlFor="longitude">Longitude</label>
            <InputForm
              id="longitude"
              value={establishmentPosition.longitude}
              readOnly
            />
          </>
        )}

        <ButtonSubmit className="confirm-button" type="submit">
          Confirmar
        </ButtonSubmit>
      </FormNewEstablishment>
    </Container>
  )
}

export default NewEstablishment
