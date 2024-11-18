import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DoacaoPage from "./Pages/DoacaoPage";
import Home from "./Pages/Home";
import './global.css';
import AnimalPage from "./Pages/AnimalPage";
import AnimaisPage from "./Pages/AnimaisPage";
import LoginPage from "./Pages/LoginPage";
import CadastroPage from "./Pages/CadastroPage";
import SobreNosPage from "./Pages/SobreNosPage";
import NoticiaPage from "./Pages/NoticiaPage";
import CatalogoDeNoticias from "./Pages/CatalogoDeNoticias";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ONGsPage from "./Pages/ONGsPage";
import DescricaoONGs from "./Pages/DescricaoONG";
import ADMPage from "./Pages/ADMPage";

function App() {

  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doacao" element={<DoacaoPage />} />
          <Route path="/Animal/:id" element={<AnimalPage />} />
          <Route path="/Cadastro" element={<CadastroPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SobreNos" element={<SobreNosPage />} />
          <Route path="/Noticia/:id" element={<NoticiaPage />} />
          <Route path="/Animais" element={<AnimaisPage />} />
          <Route path="/CatalogoDeNoticias" element={<CatalogoDeNoticias />} />
          <Route path="/ONGsParceiras" element={<ONGsPage/>} />
          <Route path="/ADM" element={<ADMPage/>} />
          <Route path="ONGs/:id" element={<DescricaoONGs/>}/>         
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App