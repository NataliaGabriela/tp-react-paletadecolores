import '../App.css'
import { useState, useEffect } from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
const Formulario = () => {
    const [color, setColor] = useState('');
    const colorLocalStorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(colorLocalStorage);
  useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(colores));
  }, [colores]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    //limpiar formulario
    setColor("");
  };
  const borrarColor = (nombreColor) => {
    const copiaColores = colores.filter((Color) => Color !== nombreColor);
    setColores(copiaColores);
  };
  return (
    <>
    <Container className="my-5 border border-secondary-subtle py-5 shadow rounded">
      <h5>Administrar Colores</h5>
    <Row className="filaForm p-4">
    <Col>
      <div >
        <div className="border border-black" style={{width: "100px", height: "100px",background: color, margin: "auto" }}></div>
      </div>
      </Col>
      <Col>
      <Form  onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Control
            type="text"
            placeholder="Ingrese un color en inglés ej: Blue"
            minLength={3}
            maxLength={50}
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="info" className="my-3 shadow rounded" type="submit">
            Guardar
          </Button>
        </FormGroup>
      </Form>
      </Col>
      
      </Row>
      </Container>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default Formulario;
