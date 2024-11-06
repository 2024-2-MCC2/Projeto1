import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoacaoPage from "./Pages/DoacaoPage";
import Home from "./Pages/Home";
import './global.css';
import AnimalPage from "./Pages/AnimalPage";
import AnimaisPage from "./Pages/AnimaisPage";
import LoginPage from "./Pages/LoginPage"; 
import CadastroPage from "./Pages/CadastroPage"; 
import SobreNosPage from "./Pages/SobreNosPage";
import Noticia from "./Components/Noticia";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Doacao" element={<DoacaoPage/>}/>
        <Route path="/Animal/:id" element={<AnimalPage/>}/>
        <Route path="/Cadastro" element={<CadastroPage/>}/> 
        <Route path="/Login" element={<LoginPage/>}/> 
        <Route path="/SobreNos" element={<SobreNosPage/>}/> 
        <Route path="/Noticia/:id" element={<Noticia/>}/> 
        <Route path="/Animais" element={<AnimaisPage/>}/> 
      </Routes>
    </Router>
  );
}
export default App