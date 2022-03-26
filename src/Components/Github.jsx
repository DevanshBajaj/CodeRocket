import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { GITHUB_QUERY } from "../GraphQl/Queries";
import { Card, Grid } from "@nextui-org/react";
import moment from "moment";

function Github() {
  const [username, setusername] = useState();

  const [getGithubUser, { loading, data }] = useLazyQuery(GITHUB_QUERY, {
    variables: {
      username: username,
    },
  });

  useEffect(() => {}, [data]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setusername(e.target.value)}
      />
      <button onClick={() => getGithubUser()}>Search</button>
      {data && (
        <>
          <div>
            <img src={data.user.avatarUrl} height="128px" width="128px"></img>
            <p>{data.user.name}</p>
            <p>{data.user.email}</p>
            <p>{data.user.following.totalCount}</p>
            <p>{data.user.followers.totalCount}</p>
          </div>
          <Grid justify="center">
            {data?.user.repositories?.edges.map((github, idx) => {
              let updatedDate = moment(github.node.updatedAt).format(
                "MMM Do YY"
              );
              let createdDate = moment(github.node.createdAt).format(
                "MMM Do YY"
              );

              return (
                <Grid.Container gap={4} justify="center">
                  <Card css={{ mw: "80%" }} key={idx}>
                    <a href={github.node.url}>
                      <h2>{github.node.name}</h2>
                    </a>
                    <h4>{updatedDate}</h4>
                    <h4>{createdDate}</h4>
                    <h4>{github.node?.description}</h4>
                    {github.node.languages.edges.map((lang, i) => (
                      <div key={i}>
                        <p style={{ color: `${lang.node.color}` }}>
                          {lang.node.name}
                        </p>
                      </div>
                    ))}
                  </Card>
                </Grid.Container>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}

export default Github;
