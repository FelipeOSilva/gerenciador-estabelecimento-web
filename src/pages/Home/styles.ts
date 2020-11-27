import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const HeaderHome = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  padding: 1rem 0.8rem;

  button{
    padding: 1rem;
    border-radius: 0.4rem;
    background: var(--color-red);
    color: var(--color-white);
  }

  & + .leaflet-container{
    z-index: 0;
    min-height: 300px;
  }
`

export const EstablishmentsArea = styled.div`
  width: 100%;
  background: var(--color-white);
  padding: 1rem 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const EstablishmentItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.6rem 0.8rem;
  font-size: 1.8rem;
  border-bottom: 1px solid var(--color-primary);

  span{
    font-weight: bold
  }

  &:hover{
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  }
`

export const NewEstablishmentButton = styled(LinkR)`
  z-index: 1;
  width: 50%;
  min-width: 270px;
  text-decoration: none;
  text-align: center;

  background: var(--color-primary);
  border-radius: 1rem;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;

  margin: 0.8rem 0;
  color: var(--color-white);

  &:active{
    opacity: 0.85;
  }

  &:disabled{
    opacity: 0.5;
  }
`

export const SearchEstablishmentButton = styled.button`
  z-index: 1;
  width: 50%;
  min-width: 270px;

  border-radius: 1rem;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;

  margin-top: 0.8rem;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:active{
    opacity: 0.85;
  }

  &:disabled{
    opacity: 0.5;
  }
`
