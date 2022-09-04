import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/Product/ProductDetail";
import * as ROUTE from "./constants/routes";
import Account from "./page/Account";
import CheckOutStep1 from "./page/Checkout/Step1/CheckOutStep1";
import CheckOutStep2 from "./page/Checkout/Step2/CheckOutStep2";
import Featured from "./page/Featured";
import Home from "./page/Home";
import Recommended from "./page/Recommended";
import Shop from "./page/Shop";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import EditAccount from "./page/EditAccount";
function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.SHOP} element={<Shop />} />
      <Route path={ROUTE.FEATURED_PRODUCTS} element={<Featured />} />
      <Route path={ROUTE.SIGNIN} element={<SignIn />} />
      <Route path={ROUTE.SIGNUP} element={<SignUp />} />
      <Route path={ROUTE.ACCOUNT_EDIT} element={<EditAccount />} />
      <Route path={ROUTE.RECOMMENDED_PRODUCTS} element={<Recommended />} />
      <Route path={ROUTE.VIEW_PRODUCT} element={<ProductDetail />} />
      <Route path={ROUTE.ACCOUNT} element={<Account />} />
      <Route path={ROUTE.CHECKOUT_STEP_1} element={<CheckOutStep1 />} />
      <Route path={ROUTE.CHECKOUT_STEP_2} element={<CheckOutStep2 />} />
    </Routes>
  );
}

export default App;
