import Barra from "./component/Barra";
import {BrowserRouter, Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Detalle from "./views/Detalle";





function App() {


  return (
    <div className="App">
 
      <BrowserRouter>
      <Barra/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Personajes/>}/>
      <Route path="/pokemons/:id" element={<Detalle/>} />
    
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
