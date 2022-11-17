import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import styles from "../styles/pages/HomePage.module.css";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const baseUrl = "https://dummyapi.io/data/v1";

export const HomePage = () => {
  const [pos, setPos] = useState(0);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  useEffect(() => {
    axios
      .get(baseUrl + "user", {
        headers: {
          "app-id": "636f2fc6e8d0ff40733fc55e",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const button = () => {};

  return (
    <div>
      {/* Section 1 */}

      <div className={styles.sectionOne}>
        <Container>
          <div className={styles.card}>
            <h1>Instant collaborations for remote teams</h1>
            <p>
              All in one for your remote team chats, collaboration and track
              projects
            </p>
            <div className="search">
              <input
                placeholder="  Email"
                style={{ width: 321, height: 56, marginRight: 10 }}
              />
              <Button style={{ width: 124, height: 56 }}>Submit</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Section 4 */}

      <div className={styles.sectionFour}>
        <Container>
          <div className="arigmat">
            <h1>Your Hub for teamwork</h1>
            <p>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <a>Learn more</a>
          </div>
        </Container>
      </div>

      {/* Section 2 */}

      <div className={styles.sectionTwo}>
        <Container>
          <h1>What people say about us</h1>
          <div className={styles.cards}>
            <div
              style={{
                transform: `translateX(${-10 * pos}%)`,
                transition: "300ms",
              }}
            >
              {new Array(10).fill(0).map((_, index) => (
                <Item rating={5} index={index} />
              ))}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "fit-content",
              bottom: 360,
              left: 550,
              cursor: "pointer",
            }}
            onClick={goLeft}
          >
            &#8592;
          </div>
          <div
            style={{
              width: "fit-content",
              position: "relative",
              bottom: 383,
              left: 650,
              cursor: "pointer",
            }}
            onClick={goRight}
          >
            &rarr;
          </div>
        </Container>
      </div>

      {/* Section 3 */}

      <div></div>
    </div>
  );
};

const Item = (props) => {
  const stars = Array(props.rating).fill(0);
  const greystar = Array(5 - props.rating).fill(0);

  return (
    <Card style={{ width: 300, marginRight: 16 }}>
      <Card.Body>
        {stars.map(() => (
          <FaStar className={styles.star}></FaStar>
        ))}
        {greystar.map(() => {
          return <FaStar className={styles.greystar}></FaStar>;
        })}
        <Card.Text>
          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </Card.Text>
        <Card.Text>
          {props.text}
          <img
            src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          Ammy Klassen
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
