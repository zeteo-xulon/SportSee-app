import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from './components/DataProvider.jsx'
import { Suspense } from 'react'
import Loading from './components/Loading/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <DataProvider>
        <App />
      </DataProvider>
    </Suspense>
  </React.StrictMode>,
)
