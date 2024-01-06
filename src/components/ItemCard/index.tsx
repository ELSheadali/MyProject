import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Img } from "components/Img";

{
  /* Add dynamic title and description as well as a price and a picture 
  className="h-[525px] md:h-auto object-cover w-full"
                  src="images/img_blue12_525x495.png"
                  alt="blueTwelve"
  */
}

function ItemCard() {
  return (
    <Card style={{ width: "26rem" }}>
      <Card.Img variant="top" src="images/img_blue12_525x495.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>None.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
