import styled from "styled-components";

const Fraime_1 = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
padding: 10px 20px;
`
const Fraime_1_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center; //horizontal
align-items: flex-start; //vertical
background-color: red;
`
const Fraime_1_1_1 = styled.div`
width: 100%;
`
const Fraime_1_1_2 = styled.div`
width: 100%;
`
const Fraime_1_1_3 = styled.div`
width: 100%;
`
//-----------------------------------------------------
const Fraime_1_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Fraime_1_2_1 = styled.div`
width: 100%;
`
const Fraime_1_2_2 = styled.div`
width: 100%;
`
const Fraime_1_2_3 = styled.div`
width: 100%;
`
const Fraime_1_2_4 = styled.div`
width: 100%;
`
const Fraime_1_2_5 = styled.div`
width: 100%;
`
//-----------------------------------------------------
const Fraime_1_3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Fraime_1_3_1 = styled.div`
width: 100%;
`
const Fraime_1_3_2 = styled.div`
width: 100%;
`
const Fraime_1_3_3 = styled.div`
width: 100%;
`
const Fraime_1_3_4 = styled.div`
width: 100%;
`
const Fraime_1_3_5 = styled.div`
width: 100%;
`
const Fraime_1_3_6 = styled.div`
width: 100%;
`




function Animais (){
    return (
        <Fraime_1> {/*div mãe*/}
            <Fraime_1_1> {/*div filha 1*/}
                <Fraime_1_1_1><img src="https://placehold.co/300x500/794D2F/FFF"></img></Fraime_1_1_1>
                <Fraime_1_1_2><img src="https://placehold.co/300x300/728395/FFF"></img></Fraime_1_1_2>
                <Fraime_1_1_3><img src="https://placehold.co/300x350/8F8B7E/FFF"></img></Fraime_1_1_3>
            </Fraime_1_1>
            <Fraime_1_2> {/*div filha 2*/}
                <Fraime_1_2_1><img src="https://placehold.co/300x500/DEB578/FFF"></img></Fraime_1_2_1>
                <Fraime_1_2_2><img src="https://placehold.co/300x300/934929/FFF"></img></Fraime_1_2_2>
                <Fraime_1_2_3><img src="https://placehold.co/300x200/000000/FFF"></img></Fraime_1_2_3>
                <Fraime_1_2_4><img src="https://placehold.co/300x350/000000/FFF"></img></Fraime_1_2_4>
                <Fraime_1_2_5><img src="https://placehold.co/300x350/000000/FFF"></img></Fraime_1_2_5>
            </Fraime_1_2>
            <Fraime_1_3> {/*div filha 3*/}
                <Fraime_1_3_1><img src="https://placehold.co/300x200/000000/FFF"></img></Fraime_1_3_1>
                <Fraime_1_3_2><img src="https://placehold.co/300x300/000000/FFF"></img></Fraime_1_3_2>
                <Fraime_1_3_3><img src="https://placehold.co/300x200/000000/FFF"></img></Fraime_1_3_3>
                <Fraime_1_3_4><img src="https://placehold.co/300x350/000000/FFF"></img></Fraime_1_3_4>
                <Fraime_1_3_5><img src="https://placehold.co/300x300/000000/FFF"></img></Fraime_1_3_5>
                <Fraime_1_3_6><img src="https://placehold.co/300x350/000000/FFF"></img></Fraime_1_3_6>
            </Fraime_1_3>
        </Fraime_1>
    )
}

export default Animais; 