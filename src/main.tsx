import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router-dom"
import Index from './Routes/AllRoutes.tsx'
import {Provider} from "react-redux"
import { Store } from './services/Stores.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Index} />
    </Provider>
  </React.StrictMode>
);
