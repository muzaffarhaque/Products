import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AllProduct, DetailsPage, Home } from './pages';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/details/:id",
      element: <DetailsPage/>,
    },
    {
      path: "/all/:serch",
      element: <AllProduct/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
