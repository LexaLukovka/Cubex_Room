import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    title: {
      letterSpacing: '0',
    },
    headline: {
      fontSize: '1.19rem',
    },
    body1: {
      fontSize: '0.9rem',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: '400',
      letterSpacing: '0',
    },
    caption: {
      fontSize: '0.7rem',
      letterSpacing: '-0.7px',
    },
  },

  spacing: {
    size1: '0.25rem',
    size2: '0.50rem',
    size3: '1rem',
    size4: '1.5rem',
    size5: '3rem',
  },

  palette: {
    primary: {
      light: '#0ba0fc',
      main: '#438afe',
      dark: '#7d7d7d',
    },
    secondary: {
      light: '#f0f0f0',
      main: '#fff',
      dark: '#D6000A',
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
