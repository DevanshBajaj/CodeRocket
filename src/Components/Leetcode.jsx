import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { LEETCODE_QUERY } from "../GraphQl/Queries";
import { Card } from "@nextui-org/react";

function Leetcode() {
  const [username, setusername] = useState();
  const [getLeetcodeUser, { loading, data }] = useLazyQuery(LEETCODE_QUERY, {
    variables: {
      username: username,
    },
    context: { clientName: "leetcodeLink" },
  });

  useEffect(() => {}, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setusername(e.target.value)}
      />
      <button onClick={() => getLeetcodeUser()}>Search</button>
      {data && (
        <div>
          <Card>
            {console.log(data)}
            <p>{data.matchedUser.username}</p>
            <p>{data.matchedUser.profile.ranking}</p>
            <p>{data.matchedUser.profile.school}</p>
            <p>{data.matchedUser.profile.postViewCount}</p>
            <div>
              {data.matchedUser.profile.skillTags.map((tag, idx) => {
                return <p key={idx}>{tag}</p>;
              })}
            </div>
          </Card>
          <Card>
            {data.matchedUser.submitStats.acSubmissionNum.map((stats, idx) => (
              <div key={idx}>
                <p>{stats.count}</p>
                <p>{stats.submissions}</p>
                <p>{stats.difficulty}</p>
              </div>
            ))}
          </Card>
          <Card>
            <p>{data.userContestRanking.attendedContestsCount}</p>
            <p>{data.userContestRanking.globalRanking}</p>
            <p>{data.userContestRanking.rating.toFixed(2)}</p>
            <p>{data.userContestRanking.topPercentage}%</p>
            <p>{data.userContestRanking.totalParticipants}</p>
          </Card>
        </div>
      )}
    </>
  );
}

export default Leetcode;
