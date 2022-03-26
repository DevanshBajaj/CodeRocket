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

  useEffect(() => {}, [data]);

  if (error) {
    return <div>loading...</div>;
  }
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        // <>
        //   <div>
        //     <img src={data.user.avatarUrl} height="128px" width="128px"></img>
        //     <p>{data.user.name}</p>
        //     <p>{data.user.email}</p>
        //     <p>{data.user.following.totalCount}</p>
        //     <p>{data.user.followers.totalCount}</p>
        //   </div>
        //   <div className={styles.grid}>
        //     {data?.user.repositories?.edges.map((github, idx) => {
        //       return (
        //         <div key={idx} className={styles.card}>
        //           <a href={github.node.url}>
        //             <h2>{github.node.name}</h2>
        //           </a>
        //           <h4>{github.node.updatedAt}</h4>
        //           <h4>{github.node.createdAt}</h4>
        //           <h4>{github.node?.description}</h4>
        //           {github.node.languages.edges.map((lang, i) => (
        //             <div key={i}>
        //               <p style={{ color: `${lang.node.color}` }}>
        //                 {lang.node.name}
        //               </p>
        //             </div>
        //           ))}
        //         </div>
        //       );
        //     })}
        //   </div>
        // </>
        <div>{JSON.stringify(data)}</div>
      )}
    </>
  );
}

export default Leetcode;
