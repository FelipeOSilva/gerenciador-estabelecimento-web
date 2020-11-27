import styled from 'styled-components'

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
  }
`

export const EstablishmentsArea = styled.div`
  width: 100%;
  background: var(--color-white);
  padding: 1rem 0.8rem;
`

export const NewEstablishmentButton = styled.button`
  z-index: 1;
  position: absolute;
  bottom: 10%;
  width: 50%;
  min-width: 300px;

  background: var(--color-primary);
  border-radius: 1rem;
  padding: 1.2rem;
  font-size: 1.6rem;
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
