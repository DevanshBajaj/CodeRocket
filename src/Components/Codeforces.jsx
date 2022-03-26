import React, { useState, useEffect } from "react";

const Codeforces = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState();

  const getCodeforcesUser = () => {
    setLoading(true);
    let username = "Aniket_Negi";
    const apiUrl = `https://codeforces.com/api/user.info?handles=${username}`;
    const userStatusApi = `https://codeforces.com/api/user.status?handle=${username}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setUserDetails(user);
        console.log(user);
        setLoading(false);
      });
    setLoading(true);
    fetch(userStatusApi)
      .then((res) => res.json())
      .then((userStatus) => {
        const solvedQuestion = userStatus.result.filter(
          (sol) => sol.verdict === "OK"
        );
        setUserStatus(solvedQuestion);
        console.log(solvedQuestion);
        setLoading(false);
      });
  };

  if (loading) return "Loading...";

  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setusername(e.target.value)}
      />
      <button onClick={() => getCodeforcesUser()}>Search</button>
      {userDetails && userStatus && (
        <>
          {JSON.stringify(userDetails)}
          <h4>Status</h4>
          {JSON.stringify(userStatus)}
        </>
      )}
    </div>
  );
};

export default Codeforces;
