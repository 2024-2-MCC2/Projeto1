import styled from "styled-components";


const NavBarContainer = styled.nav`
height: 75px;
display: flex;
align-items: center;
justify-content: center;
//background-color: blue;
`

const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
//background-color: red;
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
  padding: 10px;
  top: 100%;
  left: 0;
  width: fit-content;
  z-index: 1;
`
//--------------------------------------------------------------------------------------------------------------------------------------
const B1_Frame1 = styled.div`
display: inline-block;
flex-direction: column;
font-size: 16px;
color: #000;
li{
    padding-bottom: 10px;
    text-decoration: none;
    list-style-type: none;
}
li:Hover{
    text-decoration: underline;
}
ul{
    padding-left: 0;
    margin-left: 0;
}
p{
    font-weight: bolder;
    overflow-wrap: break-word;
}
`
const B1_Frame1_1 = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
const B1_Frame1_1_1 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
gap: 10px;
`
const B1_Frame1_1_2 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
gap: 10px;
`
const B1_Frame1_1_3 = styled.div`
display: flex;
flex-direction: column;
width: 200px;
gap: 10px;
`
const B1_Frame1_2 = styled.div`
font-size: 32px;
font-weight: bolder;
&:Hover{
    color: #06C7F2;
    text-decoration: underline;
}
`
//--------------------------------------------------------------------------------------------------------------------------------------


const B2_Frame1 = styled.div`
display: inline-block;
flex-direction: column;
font-size: 16px;
color: #000;
li{
    padding-bottom: 10px;
    text-decoration: none;
    list-style-type: none;
}
li:Hover{
    text-decoration: underline;
}
ul{
    padding-left: 0;
    margin-left: 0;
}
p{
    font-size: 17px;
    font-weight: bolder;
    overflow-wrap: break-word;
}
`
const B2_Frame1_1 = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
const B2_Frame1_1_1 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
`
const B2_Frame1_1_2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-width: 200px;
p{
    margin-bottom: 10px;
}
`
const B2_Frame1_1_2_1 = styled.div`
display: flex;
justify-content: space-between;
min-width: 200px;
img{
    width: 40px;
}
`
const B2_Frame1_2 = styled.div`
font-size: 32px;
font-weight: bolder;
&:Hover{
    color: #06C7F2;
    text-decoration: underline;
}
`
//--------------------------------------------------------------------------------------------------------------------------------------
const B3_Frame1 = styled.div`
display: inline-block;
flex-direction: column;
font-size: 16px;
color: #000;
li{
    padding-bottom: 10px;
    text-decoration: none;
    list-style-type: none;
}
li:Hover{
    text-decoration: underline;
}
ul{
    padding-left: 0;
    margin-left: 0;
}
p{
    font-size: 17px;
    font-weight: bolder;
    overflow-wrap: break-word;
}
`
const B3_Frame1_1 = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
const B3_Frame1_1_1 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
gap: 10px;
`
const B3_Frame1_1_2 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
gap: 10px;
`
const B3_Frame1_1_3 = styled.div`
display: flex;
flex-direction: column;
min-width: 100px;
gap: 10px;
`
const B3_Frame1_2 = styled.div`
font-size: 32px;
font-weight: bolder;
&:Hover{
    color: #06C7F2;
    text-decoration: underline;
}
`

function NavBar(){
    return(
        <NavBarContainer>
            <Menu>   
                <Button>
                    BUTTON 1
                    <Dropdown className="dropdown">
                        <B1_Frame1>
                            <B1_Frame1_1>
                                <B1_Frame1_1_1>
                                    <p>Tópico 1</p>
                                    <ul>
                                        <li href="#">item 1</li>
                                        <li href="#">item 2</li>
                                        <li href="#">item 3</li>
                                        <li href="#">item 4</li>
                                        <li href="#">item 5</li>
                                    </ul>
                                </B1_Frame1_1_1>
                                <B1_Frame1_1_2>
                                    <p>Tópico 2</p>
                                    <ul>
                                        <li href="#">item 1</li>
                                        <li href="#">item 2</li>
                                        <li href="#">item 3</li>
                                    </ul>
                                </B1_Frame1_1_2>
                                <B1_Frame1_1_3>
                                    <p>Sobre Nós</p>
                                    <p>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                                </B1_Frame1_1_3>
                            </B1_Frame1_1>
                            <B1_Frame1_2>
                                Saiba mais sobre isso
                            </B1_Frame1_2>
                        </B1_Frame1>
                    </Dropdown>
                </Button>
                <Button>
                    BUTTON 2
                    <Dropdown className="dropdown">
                    <B2_Frame1>
                        <B2_Frame1_1>
                            <B2_Frame1_1_1>
                                <ul>
                                    <li href="#">item 1</li>
                                    <li href="#">item 2</li>
                                    <li href="#">item 3</li>
                                    <li href="#">item 4</li>
                                    <li href="#">item 5</li>
                                    <li href="#">item 6</li>
                                    <li href="#">item 7</li>
                                    <li href="#">item 8</li>
                                </ul>
                            </B2_Frame1_1_1>
                            <B2_Frame1_1_2>
                                <p>Conecte-se conosco</p>
                                    <B2_Frame1_1_2_1>
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png"></img>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"></img>
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png"></img>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img>
                                    </B2_Frame1_1_2_1>
                            </B2_Frame1_1_2>
                        </B2_Frame1_1>
                        <B2_Frame1_2>
                            Veja tudo
                        </B2_Frame1_2>
                    </B2_Frame1>
                    </Dropdown>
                </Button>
                <Button>
                    BUTTON 3
                    <Dropdown className="dropdown">
                        <B3_Frame1>
                            <B3_Frame1_1>
                                <B3_Frame1_1_1>
                                    <p>Tópico 1</p>
                                    <ul>
                                        <li href="#">item 1</li>
                                        <li href="#">item 2</li>
                                        <li href="#">item 3</li>
                                        <li href="#">item 4</li>
                                        <li href="#">item 5</li>
                                    </ul>
                                </B3_Frame1_1_1>
                                <B3_Frame1_1_2>
                                    <p>Tópico 2</p>
                                    <ul>
                                        <li href="#">item 1</li>
                                        <li href="#">item 2</li>
                                        <li href="#">item 3</li>
                                        <li href="#">item 4</li>
                                    </ul>
                                </B3_Frame1_1_2>
                                <B3_Frame1_1_3>
                                    <p>Tópico 3</p>
                                    <ul>
                                        <li href="#">item 1</li>
                                        <li href="#">item 2</li>
                                        <li href="#">item 3</li>
                                    </ul>
                                </B3_Frame1_1_3>
                            </B3_Frame1_1>
                            <B3_Frame1_2>
                                Descubra mais quem somos
                            </B3_Frame1_2>
                        </B3_Frame1>
                    </Dropdown>
                </Button>
            </Menu>
        </NavBarContainer>
    )
}
export default NavBar