import React from "react";
import { Card } from "react-bootstrap";
import VideoPic from "./video-placeholder.jpg";
import "../../App.css";


function MyCard() {
  return (
    <div className="card-group">
    
      <Card className="my-card"> {/* Apply the custom class */}
        <Card.Img variant="top" src={VideoPic}alt="Card image cap" />
        <Card.Body>
          <Card.Title className="my-card-title">Card title</Card.Title>
          <Card.Text className="my-card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="my-card"> {/* Apply the custom class */}
        <Card.Img variant="top" src={VideoPic}alt="Card image cap" />
        <Card.Body>
          <Card.Title className="my-card-title">Card title</Card.Title>
          <Card.Text className="my-card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="my-card"> {/* Apply the custom class */}
        <Card.Img variant="top" src={VideoPic}alt="Card image cap" />
        <Card.Body>
          <Card.Title className="my-card-title">Card title</Card.Title>
          <Card.Text className="my-card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
