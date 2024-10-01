import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap'; 

function Carrossel(){
    return(
    <div>
    <Carousel controls = {true} indicatorLabels={true}>
        <CarouselItem>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt=""
          />
            <CarouselCaption>
            
            </CarouselCaption>
        </CarouselItem>
        
        <CarouselItem>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt=""
          />
            <CarouselCaption>
            
            </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt=""
          />
            <CarouselCaption>
            
            </CarouselCaption>
        </CarouselItem>
    </Carousel>
    </div> 
    );
}
export default Carrossel;