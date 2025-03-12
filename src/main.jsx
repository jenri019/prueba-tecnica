import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import DynamicThemeProvider from './providers/Theme.jsx'
import { PopupProvider } from './providers/Popup.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <DynamicThemeProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </DynamicThemeProvider>
  </Provider>,
)
