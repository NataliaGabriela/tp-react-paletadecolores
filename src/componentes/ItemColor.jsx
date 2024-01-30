import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
const ItemColor = ({ nombreColor, borrarColor }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreColor}
      <div className="flex gap-1">
        <div style={{width: "100px", height: "100px",background: nombreColor}}></div>
      </div>
      <Button variant="danger" onClick={() => borrarColor(nombreColor)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemColor;