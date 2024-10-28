import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoacaoPage from "./Pages/DoacaoPage";
import Home from "./Pages/Home";
import './global.css';
import AnimaisList from "./Components/AnimaisList";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DoacaoPage" element={<DoacaoPage/>}/>
        <Route path="/Animais/:ID" element={<AnimaisList/>}/>
      </Routes>
    </Router>
  );
}
export default App