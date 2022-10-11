import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Progress from "./Progress"

function SquareCard(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sNGlXGfEerbW8D09xP6155A0fo4QD7MKZg&usqp=CAU"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div>
          <Button variant="dark">Register</Button>
        </div>
        {/* <Progress></Progress> */}
      </Card.Body>
    </Card>
  );
}

export default SquareCard;
