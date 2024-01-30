import { useState, useEffect } from "react";
import { FormGroup } from "react-bootstrap";
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
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Form.Label>Administrar Colores</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un color en inglés ej: Blue"
            minLength={3}
            maxLength={50}
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="info" className="mx-2" type="submit">
            Guardar
          </Button>
        </FormGroup>
      </Form>
      <div className="flex gap-1">
        <div style={{width: "100px", height: "100px",background: color}}></div>
      </div>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default Formulario;
