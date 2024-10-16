import { Table } from 'react-bootstrap';

function PriceTable() {
  return (
    <Table striped bordered hover>
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
          <td>Camiseta Batman</td>
          <td>R$ 50,00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chaveiro Homem de Ferro</td>
          <td>R$ 15,00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Camisa geek</td>
          <td>R$ 60,00</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Chaveiro beserk</td>
          <td>R$ 15,00</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Pelúcia gengar</td>
          <td>R$ 75,00</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Chaveiro Gengar</td>
          <td>R$ 15,00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PriceTable;