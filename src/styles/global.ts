import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  font-size: 60%;
  --color-primary: #2c914c;
  --color-primary-shade: #278043;
  --color-primary-tint: #419c5e;
  --color-input-background: #e7e7eb;
  --color-white: #fff;
  --color-red: #f32013;
  --color-yellow: #d5de35;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root{
  height: 100vh;
  background: var(--color-primary-tint);
}

#root{
  display: flex;
  align-items: center;
  justify-content: center;
}

body, input, button, textarea{
  font: 500 1.6rem Roboto;
  border: none;
  outline: none;
}

button{
  cursor: pointer;
}

@media (min-width: 768px) {
  :root {
    font-size: 62.5%;
  }
}
`
export const Container = styled.div`
  width: 90vw;
  max-width: 768px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.header`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  padding: 1rem 0.8rem;
`
