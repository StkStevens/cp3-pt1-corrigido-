import { Carousel, CarouselItem } from "react-bootstrap";



function LojaCarousel(){
    return(
        <Carousel className="d-flex justify-content-center align-items-center text-align-center">
            <CarouselItem>
                <img className="d-block w-30" src="camisa-batman.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa-bokunohero.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa1.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa2.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa3.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa4.jpg"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa5.jpg"/>
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-30" src="camisa6.jpg"/>
            </CarouselItem>
        </Carousel>
    );
}

export default LojaCarousel