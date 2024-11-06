import { Button } from "react-bootstrap";
import NavBar from "./NavBar"
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Insignia from '../Assets/Logo Branco.png';


const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
background-color: #000;
color: #fff;
padding-right: 20px;
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
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
min-width: fit-content;
max-width: 1920px;
`
const Frame1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
padding: 0 20px;
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
.Logo{
height: 65px;
width: 100%;
object-fit: contain;
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
const Frame3_1 = styled.div`
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
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const DoarButton = styled.button`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
height: 45px;
border-radius: 5px;
background-color: #9E0000;
border: none;
&:hover{
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
const AreaDoFiliadoButton = styled.button`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
height: 45px;
border-radius: 5px;
background-color: #154F91;
border: none;
&:hover{
    background-color: #2575CF;
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
function Header() {
    return (
        <HeaderContainer>
            <Container>
                <Link to="/" className="no-link-style">
                    <Frame1>
                        <img src={Insignia} className="Logo" />
                    </Frame1>
                </Link>
                <Frame2>
                    <NavBar />
                </Frame2>
                <Frame3>
                    <Frame3_2>
                        <Link to="/Doacao" className="no-link-style">
                            <DoarButton>
                                <p>DOAR</p>
                                <span class="material-symbols-outlined">add</span>
                            </DoarButton>
                        </Link>
                        <Link to="/Login" className="no-link-style">
                            <AreaDoFiliadoButton>
                                <p>ÁREA DO FILIADO</p>
                                <span class="material-symbols-outlined">arrow_forward_ios</span>
                            </AreaDoFiliadoButton>
                        </Link>
                    </Frame3_2>
                </Frame3>
            </Container>
        </HeaderContainer>
    );
}
export default Header