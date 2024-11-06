import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavBarContainer = styled.nav`
height: 75px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
//background-color: blue;
.link-style-button{
  color: inherit;
  text-decoration: none; 
  width: fit-content;
  height: 100%;
}
`
const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
min-width: fit-content;
`
const Button = styled.h2`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0px 10px;
list-style: none;
font-size: 32px;
font-weight: bold;
position: relative;
margin: 0;
min-width: fit-content;
&:hover{
    background-color: #fff;
    color: #06C7F2;
    font-weight: bold;
}
&:hover .dropdown {
    display: block; 
}
`
const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  top: 100%;
  left: 0;
  min-width: 100%;
  width: fit-content;
  z-index: 1;
  .link-style-menu{
  color: inherit;
  text-decoration: none; 
  width: 100%;
  height: 100%;
}
`
//--------------------------------------------------------------------------------------------------------------------------------------
const B2_Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #000;
width: 100%;
`
const BotaoMenu = styled.div`
padding: 10px;
font-size: 20px;
display: flex;
justify-content: start;
align-items: center;
width: 100%;
&:hover{
    background-color: #06C7F2;
    color: #fff;
    cursor: pointer;
}
`

function NavBar() {
    return (
        <NavBarContainer>
            <Menu>
                <Link to="/SobreNos" className="link-style-button">
                    <Button>SOBRE NÓS</Button>
                </Link>
                <Button>
                    NOSSO CONTEÚDO
                    <Dropdown className="dropdown">
                        <B2_Frame1>
                            <Link to="/CatalogoDeNoticias" className="link-style-menu">
                                <BotaoMenu>Catálogo de notícias</BotaoMenu>
                            </Link>
                            <Link to="/Animais" className="link-style-menu">
                                <BotaoMenu href="#">Animais em Extinção</BotaoMenu>
                            </Link>
                            <Link to="/SobreNos" className="link-style-menu">
                                <BotaoMenu href="#">ONGs Parceiras</BotaoMenu>
                            </Link>
                        </B2_Frame1>
                    </Dropdown>
                </Button>
            </Menu >
        </NavBarContainer >
    )
}
export default NavBar