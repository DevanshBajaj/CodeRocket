import { Card, Grid } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import moment from "moment";

const Codeforces = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [userStatus, setUserStatus] = useState();

  useEffect(() => {
    let username = "Aniket_Negi";
    const apiUrl = `https://codeforces.com/api/user.info?handles=${username}`;
    const userStatusApi = `https://codeforces.com/api/user.status?handle=${username}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setUserDetails(user.result[0]);
      });

    fetch(userStatusApi)
      .then((res) => res.json())
      .then((userStatus) => {
        const solvedQuestion = userStatus.result.filter(
          (sol) => sol.verdict === "OK"
        );
        setUserStatus(solvedQuestion);
      });
  }, []);

  return (
    <Card>
      <h1>Codeforces</h1>
      <p>{userDetails.handle}</p>
      <p>{userDetails.friendOfCount}</p>
      <p>{userDetails.maxRank}</p>
      <p>{userDetails.maxRating}</p>
      <p>{moment.unix(userDetails.lastOnlineTimeSeconds).format('MMMM Do, YY')}</p>
      <h4>Status</h4>
      {userStatus?.map((status) => {
        return (
          <Grid.Container justify="center">
            <Card gap={4} css={{ mw: "80%" }}>
              <p>{status.problem.name}</p>
              <p>{status.problem.rating}</p>
              <p>{status.problem.type}</p>
              <p>{status.passedTestCount}</p>
              <p>{status.programmingLanguage}</p>
              <p>{status.timeConsumedMillis}ms</p>
              <p>{status.verdict}</p>
            </Card>
          </Grid.Container>
        )
      })}
    </Card >
  );
};

export default Codeforces;
