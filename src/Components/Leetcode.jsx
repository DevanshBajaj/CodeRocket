import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { LEETCODE_QUERY } from "../GraphQl/Queries";
import { Button, Card, Col, Container, Grid, Input, Row, Text, Textarea } from "@nextui-org/react";

function Leetcode() {
  const [username, setusername] = useState();
  const [getLeetcodeUser, { loading, data }] = useLazyQuery(LEETCODE_QUERY, {
    variables: {
      username: username,
    },
    context: { clientName: "leetcodeLink" },
  });

  useEffect(() => { }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container display="flex" justify="center" alignItems="center">
      <h1>Leetcode</h1>
      <Row justify="center" align="center" css={{ flexDirection: "row", gap: "2rem", py: "1rem" }}>
        <Input
          labelPlaceholder="leetcodeUsername"
          type="text"
          name="leetcodeUsername"
          id="leetcodeUsername"
          onChange={(e) => setusername(e.target.value)}
        />
        <Button onClick={() => getLeetcodeUser()}>Search</Button>
      </Row>
      <Container css={{ display: "flex", justifyContent: "center", alignItems: "center", py: "1rem", gap: "2rem", flexDirection: "column", maxW: "80%" }}>
        {data && (
          <>
            <Card css={{ py: "2rem" }}>
              <Text size="1.2rem" >Username: {data.matchedUser.username}</Text>
              <Text size="1.2rem" >Ranking: {data.matchedUser.profile.ranking}</Text>
              <Text size="1.2rem" >School: {data.matchedUser.profile.school}</Text>
              <Text size="1.2rem" >Post View: {data.matchedUser.profile.postViewCount}</Text>
              <Text size="1.2rem" >
                Skills:{data.matchedUser.profile.skillTags.join(", ")}
              </Text>
            </Card>
            <Card css={{ maxW: "100%" }}>
              <Text h3 css={{ p: "1rem" }}>Submit Stats</Text>
              {data.matchedUser.submitStats.acSubmissionNum.map((stats, idx) => (
                <Container key={idx} css={{ py: "1rem" }}>
                  <Text size="1.2rem">Count: {stats.count}</Text>
                  <Text size="1.2rem">Submissions: {stats.submissions}</Text>
                  <Text size="1.2rem">Difficulty: {stats.difficulty}</Text>
                </Container>
              ))}
            </Card>
            <Card>
              <Text h3 css={{ p: "1rem" }}>Contest Ranking</Text>
              <Text size="1.2rem">Count: {data.userContestRanking?.attendedContestsCount}</Text>
              <Text size="1.2rem">Global Rank: {data.userContestRanking?.globalRanking}</Text>
              <Text size="1.2rem">Contest Ranting:{data.userContestRanking?.rating.toFixed(2)}</Text>
              <Text size="1.2rem">Top %:{data.userContestRanking?.topPercentage}%</Text>
              <Text size="1.2rem">Total Participants: {data.userContestRanking?.totalParticipants}</Text>
            </Card>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Leetcode;
