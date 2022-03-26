import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { LEETCODE_QUERY } from "../GraphQl/Queries";
import { Card } from "@nextui-org/react";

function Leetcode() {
  const { loading, error, data } = useQuery(LEETCODE_QUERY, {
    variables: {
      username: "aniketnegii",
    },
    context: { clientName: "leetcodeLink" },
  });

  useEffect(() => { }, [data]);

  if (error) {
    return <div>loading...</div>;
  }
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <Card>
            {console.log(data)}
            <p>{data.matchedUser.username}</p>
            <p>{data.matchedUser.profile.ranking}</p>
            <p>{data.matchedUser.profile.school}</p>
            <p>{data.matchedUser.profile.postViewCount}</p>
            <div>{data.matchedUser.profile.skillTags.map((tag, idx) => {
              return (
                <p key={idx}>{tag}</p>
              )
            })}</div>
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
        </div>
      )}
    </>
  );
}

export default Leetcode;
