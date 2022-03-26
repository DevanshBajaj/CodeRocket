import React, { useState, useEffect } from "react";

const Codeforces = () => {
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState();

  useEffect(() => {
    let username = "Aniket_Negi";
    const apiUrl = `https://codeforces.com/api/user.info?handles=${username}`;
    const userStatusApi = `https://codeforces.com/api/user.status?handle=${username}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        setUserDetails(user);
        console.log(user);
      });

    fetch(userStatusApi)
      .then((res) => res.json())
      .then((userStatus) => {
        setUserStatus(userStatus);
        console.log(userStatus);
      });
  }, []);

  return (
    <div>
      <h1>Codeforces</h1>
      {JSON.stringify(userDetails)}
      <h4>Status</h4>
      {JSON.stringify(userStatus)}
    </div>
  );
};

export default Codeforces;
