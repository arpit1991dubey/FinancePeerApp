import React, { useState } from "react";
import { Card, Button, Alert, Image, Form } from "react-bootstrap";

import Finp from "../assets/Finp.png";
import axios from "axios";
const DataCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin:20}}>
        <Card.Body>
        <Card.Title>{props.user.userID}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.user.id}
          </Card.Subtitle>
          <Card.Text>
           Title - {props.user.title}
          </Card.Text>
          <Card.Text>
           Body - {props.user.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DataCard;
