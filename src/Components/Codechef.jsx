import { Button, Card, Container, Grid, Col, Input, Row, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import moment from "moment";

const Codechef = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [username, setusername] = useState();

  const getCodechefData = () => {
    setLoading(true);
    const apiUrl = `https://codechefscraper.herokuapp.com/${username}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setUserInfo(user);
        setLoading(false);
      });
    setLoading(true);
  };

  if (loading) return "Loading...";

  return (
    <Container display="flex" justify="center" alignItems="center">
      <h1>CodeChef</h1>
      <Row justify="center" align="center" css={{ flexDirection: "row", gap: "2rem", py: "1rem" }}>
        <Input
          labelPlaceholder="codechefUsername"
          type="text"
          name="codechefUsername"
          id="codechefUsername"
          onChange={(e) => setusername(e.target.value)}
        />
        <Button onClick={() => getCodechefData()}>Search</Button>
      </Row>
      <Col css={{ display: "flex", justifyContent: "center", alignItems: "center", py: "1rem" }}>
        {userInfo && (
          <Card css={{ display: "flex", justifyContent: "center", maxW: "30%" }}>
            <Text size="1.2rem">Name: {userInfo.data.name}</Text>
            <Text size="1.2rem">Stars: {userInfo.data.stars}</Text>
            <Text size="1.2rem">Global Rank: {userInfo.data?.global_rank}</Text>
            <Text size="1.2rem">Country Rank: {userInfo.data?.country_rank}</Text>
            <Text size="1.2rem">Rating: {userInfo.data?.rating}</Text>
          </Card>
        )}
      </Col>
    </Container>
  );
};

export default Codechef;
