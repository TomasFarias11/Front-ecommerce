import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path="/products" element={<Home/>}/>
      <Route exact path="/products/details/:id" render = {({match}) => <Details props={match.params.id} />}/>
      <Route exact path="/products/category" element={<Products/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;