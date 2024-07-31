import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Pricing from "./Component/Pricing/Pricing";
import Product from "./Component/Product/Product";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "pricing", element: <Pricing /> },
        { path: "product", element: <Product /> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
