import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoacaoPage from "./Pages/DoacaoPage";
import Home from "./Pages/Home";
import './global.css';
import AnimalPage from "./Pages/AnimalPage";
import LoginPage from "./Pages/LoginPage"; 
import CadastroPage from "./Pages/CadastroPage"; 
import SobreNosPage from "./Pages/SobreNosPage";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DoacaoPage" element={<DoacaoPage/>}/>
        <Route path="/AnimalPage/:id" element={<AnimalPage/>}/>
        <Route path="/CadastroPage" element={<CadastroPage/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/SobreNos" element={<SobreNosPage/>}/> 
      </Routes>
    </Router>
  );
}
export default App