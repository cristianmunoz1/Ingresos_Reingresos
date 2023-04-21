import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ModalIngresoPuntaje(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar puntaje al admitido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='labelIdentificacion'>Identificación:

                </Form.Label>
                <br />
                <Form.Text>
                  {props.text}
                </Form.Text>
              </Form.Group></Col>
              <Col><Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nombre</Form.Label>
                <br />
                <Form.Text>
                  {props.name}
                </Form.Text>
              </Form.Group></Col>
            </Row>
            <Row>
              <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='labelIdentificacion'>Puntaje:

                </Form.Label>
                <br />
                <Form.Text>
                  (0-100)
                </Form.Text>
                <Form.Control type="number" min={0} max={100} />
              </Form.Group></Col>
              <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <br />
                <br />

                <Form.Check type="checkbox" label="¿Activo?" />
              </Form.Group></Col>
              <Col>
              </Col>
            </Row>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Asignar Puntaje
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalIngresoPuntaje;