import { createGlobalStyle } from 'styled-components'
import {color } from './constants'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${color.bgPage};
  }

  h2{
    font-size: 32px;
    font-family: 'Sora', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }

  h3{
    font-size: 20px;
    font-family: 'Sora', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.2px;
  }
 
  h4{
    font-size: 20px;
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
  }

  h5{
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    line-height: 150%;
    letter-spacing: 0.2px;
  }
`
