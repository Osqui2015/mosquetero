import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Ticket = ({ item, handleClick }) => {
  const { title, price } = item;
  return (
    <CardGroup>
      <Card className="divticket">
        <Card.Body>
          <Card.Text>
            <p>{title}</p>
            <p>Precio: ${price}</p>
          </Card.Text>
          <button
            type="button"
            className="btn mx-2 text-white btn-primary"
            onClick={() => handleClick(item)}
          >
            Agregar
          </button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Ticket;