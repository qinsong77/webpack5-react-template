import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'

import './style/index.css'

async function prepareApp() {
  if (process.env.REACT_APP_MSW_ENABLE === 'true') {
    const { worker } = await import('./__mocks__/browser')
    return worker.start({
      serviceWorker: {
        url: `${process.env.REACT_APP_PUBLIC_PATH ?? '/'}mockServiceWorker.js`,
      },
    })
  }

  return Promise.resolve()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
prepareApp().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
