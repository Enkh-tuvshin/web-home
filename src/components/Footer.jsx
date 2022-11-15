import { Button, Container } from "react-bootstrap";
import styles from "../styles/components/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.flexContainer}>
          <div>
            {new Array(1).fill(0).map(() => (
              <p>team.</p>
            ))}
            {new Array(6).fill(0).map(() => (
              <p>instagram</p>
            ))}
          </div>
          <div>
            {new Array(7).fill(0).map(() => (
              <p>Twitter</p>
            ))}
          </div>
          <div>
            {new Array(7).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            <h4>Subscribe to our newsletter</h4>
            <Button
              style={{
                width: "100%",
                borderRadius: 0,
                marginTop: 24,
                textAlign: "left",
                color: "#4da0fd",
              }}
              size="lg"
              variant="light"
            >
              Email
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
