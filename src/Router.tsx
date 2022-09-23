import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>))

export const AppRouter = () => <RouterProvider router={router} />
