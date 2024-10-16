import { Carousel } from 'react-bootstrap';

function LojaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa-batman.webp" alt="Primeiro produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa-bokunohero.webp" alt="Segundo produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa1.webp" alt="Terceiroo produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa2.webp" alt="Quarto produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa3.webp" alt="Quinto produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa4.jpg" alt="Sexto produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa5.jpg" alt="Sétimo produto" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-25" src="camisa6.webp" alt="Oitavo produto" />
      </Carousel.Item>
    </Carousel>
  );
}

export default LojaCarousel;