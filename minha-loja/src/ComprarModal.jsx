import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import {useState} from 'react';



function ComprarModal(){
    const[show, setShow]=useState(false);

    const handleClose=() => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <button variant="primary" onClick={handleShow}>Comprar Agora</button>
        <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
                <ModalTitle>Finalizar Compra</ModalTitle>
            </ModalHeader>
            <ModalBody>Confirme sua compra para continuar</ModalBody>
            <ModalFooter>
                <button variant="secondary" onClick={handleClose}>Fechar</button>
                <button variant="primary" onClick={handleClose}>Confirmar</button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default ComprarModal;