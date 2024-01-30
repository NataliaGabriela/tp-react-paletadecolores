import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = (props) => {
  return (
    <ListGroup>
      {props.colores.map((elementoColor, posicionColor) => (
        <ItemColor key={posicionColor}
        nombreColor={elementoColor}
        borrarColor={props.borrarColor}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColores;
