import{Table}from 'react-bootstrap';


function PriceTable(){
    return(
        <Table striper bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Camisa Batman</td>
                    <td>R$50,00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chaveiro Homem de ferro</td>
                    <td>R$15,00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Chaveiro Beserk</td>
                    <td>R$15,00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Chaveiro Gengar</td>
                    <td>R$15,00</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Gengar de pelúcia</td>
                    <td>R$70,00</td>
                </tr>
            </tbody>

        </Table>
    )
}

export default PriceTable;