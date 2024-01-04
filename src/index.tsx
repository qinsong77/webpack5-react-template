import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'

import './style/index.css'

async function prepareApp() {
  if (process.env.MSW_ENABLE) {
    const { worker } = await import('./__mocks__/browser')
    return worker.start()
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
