import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/pages/BlogPage.module.css";

const data = [
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
  {
    buttonText: "dfjak",
    text: "Voluptate ullamco magna dolore non laboris eu veniam.",
  },
];

export const BlogPage = () => {
  const [index, setIndex] = useState(0);

  const goRight = () => setIndex((prev) => prev + 1);
  const goLeft = () => setIndex((prev) => prev - 1);

  return (
    <div className={styles.section}>
      <div
        style={{
          transform: `translateX(${-10 * index}%)`,
          transition: "300ms",
        }}
        className={styles.container}
      >
        {data.map(({ buttonText, text }, index) => (
          <Item buttonText={buttonText} text={text} index={index} />
        ))}
      </div>
      <Button onClick={goLeft}>Left</Button>
      <Button onClick={goRight}>Right</Button>
    </div>
  );
};

const Item = (props) => {
  return (
    <Card style={{ width: 300 }}>
      <Card.Body>
        <Card.Title>Card Title {props.index}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};
