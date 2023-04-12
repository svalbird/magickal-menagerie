import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  )
})
