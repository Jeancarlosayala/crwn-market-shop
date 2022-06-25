import Home from "./routes/home.component";
import { Routes, Route} from 'react-router-dom'
import Navigation from "./components/navigation.component";
import Authentication from "./components/authentication.component";
import Shop from "./routes/shop.component";
import CheckOut from "./routes/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={ <Authentication /> } />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App;
