import { Button } from "react-bootstrap";
import NavBar from "./NavBar"
import styled from "styled-components";
import { Link } from 'react-router-dom';


const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
background-color: #000;
color: #fff;
padding: 0 20px;
height: 75px;
width: 100%;
position: fixed;
top: 0;
z-index: 1000;
.no-link-style {
  color: inherit; /* Herda a cor do elemento pai */
  text-decoration: none; /* Remove o sublinhado */
}

`
const Frame1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
padding: 0 10px;
//background-color: red;
p{
    text-decoration: none;
    font-size: 50px;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    padding:0;
    margin:0;
    //background-color: blue;
}
`
const Frame2 = styled.div`
display: flex;
align-items: center;
height: 100%;
//background-color: green;
`
const Frame3 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-left: auto;
span{
    align-items: center;
    justify-content: center;
};
`
const Frame3_1 =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
background-color: #fff;
border-radius: 25px;
padding: 0 10px;

button{
    background-color: rgb(0,0,0,0);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
input{
    height: 40px;
    width: 300px;
    background-color: rgb(0,0,0,0);
    border: none;
};
input:focus{
    outline: none;
};
.material-symbols-outlined{
    color: #000;
}
`
const Frame3_2 = styled.div`
button{
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
height: 45px;
border-radius: 5px;
background-color: #9E0000;
border: none;
}
button:hover{
background-color: #FF0000;
}
p{
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    padding: 0 5px;
}
span{
    color:  #fff;
    font-size: 32px;
    border-left: 0.5px solid #fff;
    padding-left: 5px;

}
`

function Header(){
    return(
        <HeaderContainer>
            <Link to="/" className="no-link-style">
                <Frame1>
                    <p>LOGO</p>
                </Frame1>
            </Link>
            <Frame2>
                <NavBar/>
            </Frame2>
            <Frame3>
                <Frame3_1>
                    <input className="SearchBar" type="text" class="text-box" placeholder="Buscar..." />
                    <button>
                        <span class="material-symbols-outlined">search</span>
                    </button>
                </Frame3_1>
                <Frame3_2>
                <Link to="/DoacaoPage" className="no-link-style">
                    <button classeName="BotaoDeDoar">
                            <p>DOAR</p>
                            <span class="material-symbols-outlined">add</span>
                    </button>
                    </Link>
                </Frame3_2>
            </Frame3>
        </HeaderContainer>
    );
}
export default Header