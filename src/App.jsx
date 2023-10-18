import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AllProduct, DetailsPage, Home, RootElement } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddToCartData from './components/AddToCartData';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement/>,
      // errorElement:<Err
      children:[
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
        {
          path: "/cart",
          element: <AddToCartData/>,
        },
        // {
        //   path: "/login",
        //   element: <AllProduct/>,
        // },
      ]
    },
   
  ]);
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
