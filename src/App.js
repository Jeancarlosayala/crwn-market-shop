import Home from "./routes/home.component";
import { Routes, Route} from 'react-router-dom'
import Navigation from "./components/navigation.component";
import Authentication from "./components/authentication.component";

const Shop = () => {
  return (
    <h2> I'm shop page </h2>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={ <Authentication /> } />
      </Route>
    </Routes>
  )
}

export default App;
