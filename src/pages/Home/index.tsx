import React, { useEffect, useState } from 'react'

import Leaflet from 'leaflet'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import myLocation from '../../assets/myLocation.svg'
import establishmentLocation from '../../assets/establishment.svg'
import api from '../../services/api'
import { AxiosResponse } from 'axios'
import { Container } from '../../styles/global'
import {
  HeaderHome,
  NewEstablishmentButton,
  EstablishmentsArea,
  EstablishmentItem,
  SearchEstablishmentButton
} from './styles'
import { useHistory } from 'react-router-dom'

const myLocationIcon = Leaflet.icon({
  iconUrl: myLocation,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70]
})

const establishmentIcon = Leaflet.icon({
  iconUrl: establishmentLocation,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70]
})

interface Establishment {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
  distance?: number
}

type Position = {
  latitude: number
  longitude: number
}

const Home = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([])
  const history = useHistory()
  const [myPosition, setMyPosition] = useState<Position>({
    latitude: -3.7304762,
    longitude: -38.5434174
  })

  const searchEstablishment = () => {
    api
      .get(
        `establishments/?lat=${myPosition.latitude}&lng=${myPosition.longitude}`
      )
      .then((response: AxiosResponse<{ data: Establishment[] }>) => {
        setEstablishments(response.data.data)
        console.log(response.data)
      })
      .catch((err) => {
        alert('Não foi possível buscar estabelecimentos!')
        console.log(err)
      })
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setMyPosition({ latitude, longitude })
    })
  })

  const handleSignOut = () => {
    window.sessionStorage.removeItem('jwt_token')
    history.replace('/')
  }
  return (
    <Container>
      <HeaderHome>
        <h2>Home</h2>
        <button onClick={handleSignOut}>Sair</button>
      </HeaderHome>
      <MapContainer
        center={[myPosition.latitude, myPosition.longitude]}
        zoom={15}
        style={{ width: '100%', height: '80%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />
        <Marker
          icon={myLocationIcon}
          position={[myPosition.latitude, myPosition.longitude]}
        >
          <Popup>
            <strong>Estou aqui!</strong>
          </Popup>
        </Marker>

        {establishments.length > 0 &&
          establishments.map((establishment: Establishment) => (
            <Marker
              key={establishment.id}
              icon={establishmentIcon}
              position={[establishment.latitude, establishment.longitude]}
            >
              <Popup>
                <strong>{establishment.name}</strong>
                <p>{establishment.description} </p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      <EstablishmentsArea>
        <NewEstablishmentButton to="/new-establishment">
          Cadastrar Estabelecimentos
        </NewEstablishmentButton>
        <SearchEstablishmentButton onClick={searchEstablishment}>
          Buscar Estabelecimentos
        </SearchEstablishmentButton>
        {establishments?.map((establishment) => (
          <EstablishmentItem key={establishment.id}>
            <span>{establishment.name}</span>
            <span>{establishment.distance} km</span>
          </EstablishmentItem>
        ))}
      </EstablishmentsArea>
    </Container>
  )
}

export default Home
