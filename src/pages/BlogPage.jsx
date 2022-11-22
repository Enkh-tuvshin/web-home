import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import image from "../assets/images/Rectangle.png";
import portrait from "../assets/images/Ellipse.png";
import styles from "../styles/pages/BlogPage.module.css";

const data = [
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
];

export const BlogPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <div className={styles.section}>
        <div
          style={{
            transform: `translateX(${-9 * index}%)`,
            transition: "300ms",
          }}
          className={styles.container}
        >
          {data.map(({ buttonText, text }, index) => (
            <Item buttonText={buttonText} text={text} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Item = (props) => {
  return (
    <Card style={{ width: "18rem", height: "fit-content" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>The Emotional Toll of Being in UX</Card.Title>
        <Card.Text>
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </Card.Text>
        <Card.Img className={styles.Img} src={portrait}/>
      </Card.Body>
    </Card>
  );
};
