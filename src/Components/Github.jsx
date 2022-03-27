import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { GITHUB_QUERY } from "../GraphQl/Queries";
import styles from "./Github.module.css";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";

function Github({ userHandle }) {
  const [getGithubUser, { loading, data }] = useLazyQuery(GITHUB_QUERY, {
    variables: {
      username: userHandle,
    },
  });

  useEffect(() => {
    getGithubUser();
  }, [userHandle]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className={styles.Container}>
      <h1>Github</h1>
      {data && (
        <>
          <div className={styles.profile}>
            <img src={data.user.avatarUrl} height="128px" width="128px"></img>
            <Text size="1.2rem">Name: {data.user.name}</Text>
            <Text size="1.2rem">E-mail: {data.user.email}</Text>
            <Text size="1.2rem">
              Following: {data.user.following.totalCount}
            </Text>
            <Text size="1.2rem">
              Followers: {data.user.followers.totalCount}
            </Text>
          </div>
          <div className={styles.grid}>
            {data?.user.repositories?.edges.map((github, idx) => {
              let updatedDate = moment(github.node.updatedAt).format(
                "MMM Do YY"
              );
              let createdDate = moment(github.node.createdAt).format(
                "MMM Do YY"
              );
              return (
                <Card key={idx}>
                  <a href={github.node.url}>
                    <h2>{github.node.name}</h2>
                  </a>
                  <Text size="1.2rem">Last Updated: {updatedDate}</Text>
                  <Text size="1.2rem">Created At: {createdDate}</Text>
                  <Text size="1.2rem">
                    Description:{" "}
                    {github.node.description ? (
                      <span>{github.node.description}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </Text>
                  <div className={styles.skills}>
                    <Text size="1.2rem">Languages:</Text>
                    {github.node.languages.edges.map((lang, i) => (
                      <Text
                        size="1.2rem"
                        key={i}
                        css={{ color: `${lang.node.color}` }}
                      >
                        {lang.node.name}
                      </Text>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Github;
