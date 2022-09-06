import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => <div>I'm the shop</div>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Auth />} />
    </Route>
  </Routes>
);

export default App;
