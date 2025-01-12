import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/home.jsx'
import Chicken from './components/non-veg/Chicken.jsx'
import Fish from './components/non-veg/Fish.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"/chicken",
        element: <Chicken />
      },
      {
        path:"/fish",
        element: <Fish />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
