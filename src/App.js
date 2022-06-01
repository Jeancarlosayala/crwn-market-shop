import Home from "./routes/home.component";
import { Routes, Route} from 'react-router-dom'
import Navigation from "./components/navigation.component";
import SignIn from "./routes/sign-in.component";

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
        <Route path="sign-in" element={ <SignIn /> } />
      </Route>
    </Routes>
  )
}

export default App;
