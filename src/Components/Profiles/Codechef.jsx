import {
  Button,
  Card,
  Container,
  Grid,
  Col,
  Input,
  Row,
  Text,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import moment from "moment";

const Codechef = ({ userHandle }) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const profiles = JSON.parse(localStorage.getItem("profiles"));

  const getCodechefData = () => {
    setLoading(true);
    const apiUrl = `https://codechefscraper.herokuapp.com/user/${profiles.codechef}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setUserInfo(user);
        setLoading(false);
      });
    setLoading(true);
  };

  useEffect(() => {
    getCodechefData();
  }, []);

  if (loading) return "Loading...";

  return (
    <Container display="flex" justify="center" alignItems="center">
      <Col
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "2rem",
        }}
      >
        {userInfo && (
          <Card
            css={{ display: "flex", justifyContent: "center", maxW: "40%" }}
          >
            <Text size="1.2rem">Name: {userInfo.data.name}</Text>
            <Text size="1.2rem">Stars: {userInfo.data.stars}</Text>
            <Text size="1.2rem">Global Rank: {userInfo.data?.global_rank}</Text>
            <Text size="1.2rem">
              Country Rank: {userInfo.data?.country_rank}
            </Text>
            <Text size="1.2rem">Rating: {userInfo.data?.rating}</Text>
          </Card>
        )}
      </Col>
    </Container>
  );
};

export default Codechef;
