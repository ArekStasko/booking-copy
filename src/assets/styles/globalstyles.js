import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body{
   width: 100%;
   height: 100%;
   padding: 0;
   margin: 0;
   font-family: 'Roboto';
}

button{
   outline:none;
   cursor: pointer;
   :hover{
      opacity: 0.9;
   }
}
`

export default GlobalStyle
