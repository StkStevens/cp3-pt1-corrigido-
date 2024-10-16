import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar';
import LojaCarousel from './components/Carousel';
import ProductCards from './components/ProductCards';
import PriceTable from './components/PriceTable';
import ComprarModal from './components/ComprarModal';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <LojaCarousel />
        <h2 className="mt-5">Produtos</h2>
        <ProductCards />
        <h2 className="mt-5">Tabela de Preços</h2>
        <PriceTable />
        <div className="mt-5">
          <ComprarModal />
        </div>
      </Container>
    </div>
  );
}

export default App;