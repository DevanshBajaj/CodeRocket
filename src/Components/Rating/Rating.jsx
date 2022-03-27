import { Text } from "@nextui-org/react";
import styles from '../Profiles/Github.module.css'
import React from "react";
import StarRatings from 'react-star-ratings';
const leetcodeRating = JSON.parse(localStorage.getItem("leetcodeData"));
const codechefRating = JSON.parse(localStorage.getItem("codechefData"));
const codeforcesRating = JSON.parse(localStorage.getItem("codeforcesData"));
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

  let codec = 0
  switch (codechefRating) {
    case "7" || "6":
      codec = 5
      break;
    case "5":
      codec = 4
      break;
    case "4" || "3":
      codec = 3
      break;
    case "2":
      codec = 2
      break;
    case "1":
      codec = 1
      break;
    default:
      codec = 0
  }

  let leetc = 0
  if (((leetcodeRating.rating * 100) / leetcodeRating.total) > 80) {
    leetc = 1
  } else if (((leetcodeRating.rating * 100) / leetcodeRating.total) > 60) {
    leetc = 2
  } else if (((leetcodeRating.rating * 100) / leetcodeRating.total) > 40) {
    leetc = 3
  } else if (((leetcodeRating.rating * 100) / leetcodeRating.total) > 20) {
    leetc = 4
  } else {
    leetc = 5
  }

  let total_rating = ((codef + codec + leetc) / 3)

  return (
    <div className={styles.RatingContainer}>
      <Text b size="2rem">User's 🚀  Rating:</Text>
      <StarRatings
        rating={total_rating}
        starRatedColor="orange"
        numberOfStars={5}
        name='rating'
        starDimension="120px"
        starSpacing="12px"
      />
    </div>
  )
};

export default Rating;
