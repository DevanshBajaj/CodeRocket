import React, { useEffect } from "react";
import Leetcode from "../Components/Leetcode";
import Codeforces from "../Components/Codeforces";
import Github from "../Components/Github";
import Codechef from "../Components/Codechef";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Home() {
  let navigate = useNavigate();
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

  return (
    <div>
      <h1>github</h1>
      <Github />
      <h1>Leetcode</h1>
      <Leetcode />
      <h1>Codeforces</h1>
      <Codeforces />
      <h1>CodeChef</h1>
      <Codechef /> <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
