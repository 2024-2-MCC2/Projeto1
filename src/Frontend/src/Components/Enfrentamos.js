import styled from "styled-components";
import Polution from "../Assets/Poluição-icon.png"

const Frame1  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
gap: 20px;
width: 100%;
`
const Frame1_1  = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Frame1_2  = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 50px;
button{
display: flex;
justify-content: space-between;
align-items: center;
background-color: #F2C538;
height: 55px;
width: 250px;
border: none;
border-radius: 15px;
padding: 10px 20px;
}
button div{
    width: 100%;
}
button span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    height: 45px;
    width: 45px;
}
button:hover{
    background-color: #FDDE7D;
    border:  1px solid #000;
}
`
function Enfrentamos(){
    return(
        <Frame1>
           <Frame1_1>
                <h2>Conheça as causas que combatemos:</h2>
           </Frame1_1>
           <Frame1_2>
                <button>
                    <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 1</p>
                    </div>
                </button>
                <button>
                    <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 2</p>
                    </div>
                </button>
                <button>
                    <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 3</p>
                    </div>
                </button>
                <button>
                <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 4</p>
                    </div>
                </button>
                <button>
                    <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 5</p>
                    </div>
                </button>
                <button>
                <span class="material-symbols-outlined">warning</span>
                    <div>
                    <p>item 6</p>
                    </div>
                </button>
           </Frame1_2>
        </Frame1>
    );
}
export default Enfrentamos;




