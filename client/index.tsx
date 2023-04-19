import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="tohora-2023-tom.au.auth0.com"
      clientId="iuSClRSeYj0So88jjIt4lMr7NiCgJ8rv"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://pets/api',
      }}
    >
      <Router>
        <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Provider>
      </Router>
    </Auth0Provider>
  )
})
