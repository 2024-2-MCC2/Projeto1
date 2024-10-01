import styled from "styled-components";

const FooterContainer = styled.div`
display: flex;
flex-direction:  column;
justify-content: center;
align-items: center;
background-color: #202020;
color: #fff;
padding: 50px;
`
//-------------------------------------------------------------
const Frame1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 50px;
`
const Frame1_1 = styled.div`
h2{
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 50px;
} 
`
const Frame1_2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 800px;
padding: 10px;
margin-bottom: 50px;
border-radius:15px;
border: 0.5px solid #fff;
`
const NomeBox = styled.input`
margin: 0 10px; 
background-color: rgba(0, 0, 0, 0);
border: none;
color: #fff;
font-size: 22px;
align-items: stretch;
height: 50px;
width: 40%;

&:focus{
    outline: none;
}
`
const EmailBox = styled.input`
margin-right: 10px; 
background-color: rgba(0, 0, 0, 0);
border: none;
color: #fff;
font-size: 22px;
height: 50px;
width: 40%;
padding-left: 10px;
border-left: 0.5px solid #fff;
&:focus{
    outline: none;
}
`
const InscrevaseBotton = styled.button`
font-size: 22px;
font-weight: bold;
color: #000;
background-color: #06AFF2;
border-radius: 15px;
width: 200px;
height: 50px;
&:hover{
    background-color: #54CEFF;
    color: #fff;
}
`
const Fram1_3 = styled.div`
display:flex;
justify-content: space-between;
width: 800px;
margin-bottom: 20px;
`
const Facebook_Botton = styled.button`
font-size: 26px;
font-weight: bolder;
width: 250px;
height: 55px;
border-radius: 15px;
border: none;
background-color: #2575CF;
color: #fff;
&:hover{
    background-color: #fff;
    color: #2575CF;
}
`
const Instagram_Botton = styled.button`
font-size: 26px;
font-weight: bolder;
width: 250px;
height: 55px;
border-radius: 15px;
border: none;
background-color: #F55349;
color: #fff;
&:hover{
    background-color: #fff;
    color: #F55349;
}
`
const X_Botton = styled.button`
font-size: 26px;
font-weight: bolder;
width: 250px;
height: 55px;
border-radius: 15px;
border: none;
background-color: #000;
color: #fff;
&:hover{
    background-color: #fff;
    color: #000;
}
`
//--------------------------------------------------------
const Frame2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 75%;
margin-bottom: 50px;
padding: 0 50px;
//background-color: red;
`
const Frame2_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: 25px;
//background-color: red;
`
const LOGO = styled.div`
font-size: 100px;
font-weight: bolder;
//background-color: red;
`
const LogoFECAP = styled.div`
font-size: 50px;
font-weight: bolder;
text-align: center;
width: 200px;
//background-color: red;
`
//-----------------------------------------------
const Frame3 = styled.div`
font-size: 22px;
`

function Footer(){
    return(
        <FooterContainer>
            <Frame1>
                <Frame1_1>
                    <h2>Inscreva-se no nosso news-letter para ficar por dentro de tudo</h2>
                </Frame1_1>
                <Frame1_2>
                    <NomeBox type="text" class="text-box" placeholder="Nome" />
                    <EmailBox type="text" class="text-box" placeholder="e-mail" />
                    <InscrevaseBotton>Inscreva-se</InscrevaseBotton>
                </Frame1_2>
                <Fram1_3>
                    <Facebook_Botton href="#">Facebook</Facebook_Botton>
                    <Instagram_Botton href="#">Instagram</Instagram_Botton>
                    <X_Botton href="#">X</X_Botton>
                </Fram1_3>
            </Frame1>
            <Frame2>
                    <LOGO>LOGO</LOGO>
                    <LogoFECAP href="#">LOGO FECAP</LogoFECAP>
                    <Frame2_1>
                        <h3>nosso contato:</h3>
                        <a>0800 4002-8922</a>
                        <a>contact@aliancaoceana.com.br</a>
                        <a>Av. da Liberdade, 532 - Liberdade, São Paulo - SP, </a>
                    </Frame2_1>
            </Frame2>
            <Frame3>
                <a>© 2024 Aliança Oceânica</a> 
            </Frame3>
        </FooterContainer>
    )
}
export default Footer