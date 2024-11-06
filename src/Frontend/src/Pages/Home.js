import Header from "../Components/Header"
import Footer from "../Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "../Components/Carrossel";
import QuadroDeManchetes from "../Components/QuadroDeManchetes";
import Enfrentamos from "../Components/Enfrentamos";
import NoticiasTopic from "../Components/NoticiasTopic";
import NoticiasList from "../Components/NoticiasList";
import Noticia from "../Components/Noticia"


function Home(){
    return(
      <div>
        <Header/>
        <Carrossel/>
        <Enfrentamos/>
        <QuadroDeManchetes/>
        <Footer/>
      </div>
    );
  }
  export default Home