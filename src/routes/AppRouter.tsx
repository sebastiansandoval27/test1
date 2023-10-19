import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Events from '../pages/Events'
import Event from '../pages/Event'

const routesElements = [
  {
    path: '/',
    element: <Events />,
  },
  {
    path: '/event/:id',
    element: <Event />,
  },
]

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesElements?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
