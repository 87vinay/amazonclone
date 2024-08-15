import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import { productsData } from "./api/api";
import Signin from "./Pages/Signin";
import Cart from "./Pages/Cart";
import Registration from "./Pages/Registration";
import LoadingLine from "./LoadingLine";
import Checkout from "./Pages/Checkout";
import NavMinitv from "./components/Minitv/NavMinitv";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  const triggerLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200); 
  };
  return (
    <div>
      <Header loading={loading} />
      <LoadingLine loading={loading} />
      <ScrollRestoration />
      <Outlet context={{ triggerLoading }} />
      <Footer />
    </div>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/minitv" element={<NavMinitv/>}/>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
