import React, { useState, useEffect } from "react";
import Leetcode from "./Leetcode";
import Codeforces from "./Codeforces";
import Github from "./Github";
import Codechef from "./Codechef";

export default function Profiles() {
  const [userProfiles, setuserProfiles] = useState(null);

  const getProfiles = () => {
    const profiles = JSON.parse(localStorage.getItem("profiles"));
    setuserProfiles(profiles);
  };

  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div>
      <h1 align="center">Github</h1>
      <Github userHandle={userProfiles?.github} />
      <h1 align="center">Leetcode</h1>
      <Leetcode userHandle={userProfiles?.leetcode} />
      <h1 align="center">Codeforces</h1>
      <Codeforces userHandle={userProfiles?.codeforce} />
      <h1 align="center">CodeChef</h1>
      <Codechef userHandle={userProfiles?.codechef} />
    </div>
  );
}
