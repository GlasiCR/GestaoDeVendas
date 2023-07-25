import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './theme/GlobalStyles.ts'
import { ThemeProvider, createTheme} from '@mui/material'

const finalTheme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root: {
          color: '#212121',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'inherit',
          },
        }  
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
      <GlobalStyles />
      <App />
    
  </React.StrictMode>,
)
