import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="auth" element={<Auth />} />
    </Route>
  </Routes>
);

export default App;
