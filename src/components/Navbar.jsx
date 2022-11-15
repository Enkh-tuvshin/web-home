import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "../styles/components/Navbar.module.css";
import Form from 'react-bootstrap/Form';

const routes = [
  { name: "Home", to: "/" },
  { name: "Services", to: "blog" },
  { name: "Contacts", to: "post" },
  { name: "Log in", to: "/home" }
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);

  return (
    <div
      className={styles.container}
      style={isDark ? { background: "#000", color: "#fff" } : {}}
    >
      <Container>
        <div className={styles.innerContainer}>
          {/* Logo */}

        <img src="https://thumbs.dreamstime.com/b/people-word-team-icon-sign-logo-white-background-people-word-team-icon-sign-logo-148212800.jpg" />

          {/* Routes */}

          <div>
            {routes.map(({ name, to }) => (
              <Link key={name} to={to}>
                {name}
              </Link>
            ))}
            <Button variant="outline-secondary">Get Access</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
