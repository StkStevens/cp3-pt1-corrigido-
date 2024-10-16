import { CardBody, CardImg, CardText, CardTitle, Row } from "react-bootstrap";



function ProductCards(){
    const produtos = [
        {nome:'Camisa Batman', preco:'R$50,00', imagem:'camisa-batman.webp'},
        {nome:'Chaveiro Homem de ferro', preco:'R$15,00', imagem:'chaveiro-homemdeferro.webp'},
        {nome:'Camisa Geek', preco:'R$50,00', imagem:'camisa-bokunohero.webp'},
        {nome:'Chaveiro Beserk', preco:'R$15,00', imagem:'chaveiro-beserk.webp'},
        {nome:'Chaveiro Gengar', preco:'R$15,00', imagem:'gengar.webp'},
        {nome:'Gengar de Pelúcia', preco:'R$70,00', imagem:'gengarp.webp'},
        {nome:'Camisa Dc comics', preco:'R$50,00', imagem:'camisa4.jpg'},
    ];

    return(
        <Row>
            {produtis.map((produto, index)=> (
                <Col key={index} sm={4}>
                    <Card style={{width:'18rem'}}>
                        <CardImg variant="top" src={produto.imagem}/>
                        <CardBody>
                            <CardTitle>{produto.nome}</CardTitle>
                            <CardText>{produto.preco}</CardText>
                            <Button variant="primary">Comprar</Button>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ProductCards