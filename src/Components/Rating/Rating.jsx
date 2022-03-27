import React from "react";
import { useState } from "react"
const leetcodeRating = JSON.parse(localStorage.getItem("leetcodeData"));
const codechefRating = JSON.parse(localStorage.getItem("codechefData"));
const codeforcesRating = JSON.parse(localStorage.getItem("codeforcesData"));
console.log(leetcodeRating.total)
const Rating = () => {
  let codef = 0

  switch (codeforcesRating) {
    case "legendary grandmaster" || "international grandmaster":
      codef = 5
      break;
    case "grandmaster" || "international master":
      codef = 4
      break;
    case "master" || "candidate master":
      codef = 3
      break;
    case "expert" || "specialist":
      codef = 2
      break;
    case "apprentice" || "pupil" || "newbie":
      codef = 1
      break;
    default:
      codef = 0
  }


  return <div>Rating</div>;
};

export default Rating;
