import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoacaoPage from "./Pages/DoacaoPage";
import Home from "./Pages/Home";
import './global.css';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DoacaoPage" element={<DoacaoPage/>}/>
      </Routes>
    </Router>
  );
}
export default App