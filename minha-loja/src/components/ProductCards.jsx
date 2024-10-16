import { Card, Button, Row, Col } from 'react-bootstrap';

function ProductCards() {
  const produtos = [
    { nome: 'Camiseta Batman', preco: 'R$ 50,00', imagem: 'camisa-batman.webp' },
    { nome: 'Chaveiro Homem de Ferro', preco: 'R$ 15,00', imagem: 'chaveiro-homemdeferro.webp' },
    { nome: 'Camisa geek', preco: 'R$ 60,00', imagem: 'camisa-bokunohero.webp' },
    { nome: 'Chaveiro dragon slayer (beserk)', preco: 'R$ 15,00', imagem: 'chaveiro-beserk.webp' },
    { nome: 'Gengar de pelúcia', preco: 'R$ 75,00', imagem: 'gengarp.webp' },
    { nome: 'Chaveiro gengar', preco: 'R$ 15,00', imagem: 'gengar.webp' },
  ];

  return (
    <Row>
      {produtos.map((produto, index) => (
        <Col key={index} sm={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={produto.imagem} />
            <Card.Body>
              <Card.Title>{produto.nome}</Card.Title>
              <Card.Text>{produto.preco}</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductCards;
