import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { useAuth } from "./contexts/AuthContextProvider";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/products", element: <ProductPage />, id: 3 },
    { link: "/products/:id", element: <ProductDetailsPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
    { link: "/contactus", element: <ContactUsPage />, id: 6 },
    { link: "/aboutus", element: <AboutUsPage />, id: 7 },
    { link: "/cart", element: <CartPage />, id: 8 },
    // { link: "/crud", element: <Crud />, id: 9}
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 9 },
    { link: "/edit/:id", element: <EditProductPage />, id: 10 },
  ];

  return (
    <Routes>
      <Route
        element={
          <div style={{ minHeight: "54vh" }}>
            <Outlet />
          </div>
        }
      >
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === "sultan_tantaev@mail.ru" ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
