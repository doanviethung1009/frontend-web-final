import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'
import App2 from './App2.jsx'
import { AutoWrapper } from './context/Auth.Context.jsx'

import React from 'react';





createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App /> */}

    <App2 />
  </StrictMode>,

  // <AutoWrapper>
  //   <App2 />
  // </AutoWrapper >

)
