import Footer from "./components/Footer.jsx";
import PrivateRoute from "./router/PrivateRoute.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { current } from "./redux/actions/authAction";
import Header from "./components/Header/Header.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProductDes from "./pages/Product/ProductDes.js";
import ProductList from "./pages/ProductList/ProductList.jsx";
import UserList from "./pages/UserList/UserList.jsx";
import AdminProductList from "./pages/AdminProductList/AdminProductList.jsx";
import AddNewProduct from "./pages/AdminProductList/AddNewProduct.jsx";
import EditProduct from "./pages/AdminProductList/EditProduct.jsx";
import AdminSettings from "./pages/AdminSettings/AdminSettings.jsx";
import EditProfile from "./pages/EditProfile/EditProfile.jsx";
import ShopCart from "./pages/Shop/Shop.jsx";
import NotFound from "./pages/404NotFound.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
      // yasta7feh bel user fi la7tha athika
    }
    //salem abessi
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route
          path="/user/profile"
          element={
            <PrivateRoute>
              <Header />
              <Profile />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/user/editprofile"
          element={
            <PrivateRoute>
              <Header />
              <EditProfile />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/productdes"
          element={
            <PrivateRoute>
              <Header />
              <ProductDes />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/productlist"
          element={
            <PrivateRoute>
              <Header />
              <ProductList />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/productlist"
          element={
            <PrivateRoute>
              <Header />
              <AdminProductList />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/addnewproduct"
          element={
            <PrivateRoute>
              <Header />
              <AddNewProduct />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/editproduct"
          element={
            <PrivateRoute>
              <Header />
              <EditProduct />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/user/settings"
          element={
            <PrivateRoute>
              <Header />
              <AdminSettings />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/userlist"
          element={
            <PrivateRoute>
              <Header />

              <UserList />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/user/shop"
          element={
            <PrivateRoute>
              <Header />

              <ShopCart />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Header />

              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
