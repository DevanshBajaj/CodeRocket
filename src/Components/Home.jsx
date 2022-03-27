import React, { useState, useEffect } from "react";
import Leetcode from "../Components/Leetcode";
import Codeforces from "../Components/Codeforces";
import Github from "../Components/Github";
import Codechef from "../Components/Codechef";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Home() {
  let navigate = useNavigate();
  const [userProfiles, setuserProfiles] = useState(null);
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  const getProfiles = () => {
    const profiles = JSON.parse(localStorage.getItem("profiles"));
    setuserProfiles(profiles);
  };

  useEffect(() => {
    getProfiles();
  }, []);
  console.log(userProfiles);
  return (
    <div>
      <h1 align="center">Hello, {userProfiles?.fullName}</h1>
      <h1>Github</h1>
      <Github userHandle={userProfiles?.github} />
      <h1>Leetcode</h1>
      <Leetcode userHandle={userProfiles?.leetcode} />
      <h1>Codeforces</h1>
      <Codeforces userHandle={userProfiles?.codeforce} />
      <h1>CodeChef</h1>
      <Codechef userHandle={userProfiles?.codechef} />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
