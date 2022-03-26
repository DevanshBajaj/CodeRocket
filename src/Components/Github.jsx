import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import styles from '../../styles/Home.module.css';

const GITHUB_QUERY = gql`
  query { 
    user(login: "devanshbajaj") {
      anyPinnableItems(type: REPOSITORY)
      avatarUrl
      company
      email
      following {
        totalCount
      }
      followers {
        totalCount
      }
      name
      repositories(
        isFork: false
        ownerAffiliations: OWNER
        privacy: PUBLIC
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 10
      ) {
        totalCount
        edges {
          node {
            createdAt
            description
            name
            stargazerCount
            updatedAt
            url
            languages(first: 10) {
              edges {
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Github() {
  const { loading, error, data } = useQuery(GITHUB_QUERY)

  useEffect(() => {
  }, [data])

  if (error) {
    return (
      <div>loading...</div>
    )
  }
  return (
    <>
      {/* {loading ? (
        <div>
           <div className={styles.profile}>
             <Image src={data.user.avatarUrl} height="128px" width="128px"></Image>
              <p>{data.user.name}</p>
             <p>{data.user.email}</p>
             <p>{data.user.following.totalCount}</p>
             <p>{data.user.followers.totalCount}</p>
           </div>
          <div className={styles.grid}>
            {repositories.map((github) => {
              return (
                <div className={styles.card}>
                  <a href={github.url}><h2>{github.name}</h2></a>
                  <h4>{github.updatedAt}</h4>
                  <h4>{github.createdAt}</h4>
                  <h4>{github?.description}</h4>
                  {github.languages.edges.map((lang) => (
                    <>
                      <p style={{ color: `${lang.node.color}` }}>{lang.node.name}</p>
                    </>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      ) : (<div>loading....</div>)} */}
    </>
  )
}

export default Github;