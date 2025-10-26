import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Demo = lazy(() => import('./pages/Demo'))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
         <Home />
      </Suspense>
    ),
  },
  {
    path: "/demo",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
       <Demo />
      </Suspense>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
