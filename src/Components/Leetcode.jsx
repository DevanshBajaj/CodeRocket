import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { LEETCODE_QUERY } from "../GraphQl/Queries";

function Leetcode() {
  const { loading, error, data } = useQuery(LEETCODE_QUERY, {
    variables: {
      username: "user4698Pp",
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
        <div>{JSON.stringify(data)}</div>
      )}
    </>
  );
}

export default Leetcode;
