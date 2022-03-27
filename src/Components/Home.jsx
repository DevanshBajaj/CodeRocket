import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profiles from "./Profiles/Profiles";
import { Button, Container, Grid, Spacer, Text } from "@nextui-org/react";
import Leaderboard from "./Leaderboard/Leaderboard";
import Rating from "./Rating/Rating";
import styles from "../../styles/Home.module.css"

export default function Home() {
  let navigate = useNavigate();
  const [tab, switchTab] = useState("profiles");

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let displayComponent = <Profiles />;
  if (tab === "profiles") displayComponent = <Profiles />;
  else if (tab === "leaderboard") displayComponent = <Leaderboard />;
  else displayComponent = <Rating />;

  return (
    <div>
      <div className={styles.navbar}>
        <Text b size="2rem">CodeRocket 🚀 </Text>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <Container display="flex" justify="center" alignItems="center">
        <Spacer y={5} />
        <Button.Group size="xl">
          <Button onClick={() => switchTab("profiles")}>Your Profiles</Button>
          <Button onClick={() => switchTab("leaderboard")}>Leaderboard</Button>
          <Button onClick={() => switchTab("combinedrating")}>
            Rocket Rating
          </Button>
        </Button.Group>
      </Container>
      {displayComponent}
      <div className={styles.footer}>Made with 💝 for 🚢🚀 </div>
    </div>
  );
}
