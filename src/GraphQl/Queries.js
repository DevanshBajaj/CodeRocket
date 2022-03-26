import { gql } from "@apollo/client";

export const GITHUB_QUERY = gql`
  query getGithubProfile($username: String!) {
    user(login: $username) {
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

export const LEETCODE_QUERY = gql`
  query userProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
      badge {
        name
      }
    }
    matchedUser(username: $username) {
      contestBadge {
        name
        expired
        hoverText
        icon
      }
      userCalendar(year: 2022) {
        streak
        totalActiveDays
      }
      problemsSolvedBeatsStats {
        difficulty
        percentage
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      tagProblemCounts {
        advanced {
          tagName
          tagSlug
          problemsSolved
        }
        intermediate {
          tagName
          tagSlug
          problemsSolved
        }
        fundamental {
          tagName
          tagSlug
          problemsSolved
        }
      }
      username
      githubUrl
      twitterUrl
      linkedinUrl
      profile {
        ranking
        userAvatar
        realName
        aboutMe
        school
        websites
        countryName
        company
        jobTitle
        skillTags
        postViewCount
        postViewCountDiff
        reputation
        reputationDiff
        solutionCount
        solutionCountDiff
        categoryDiscussCount
        categoryDiscussCountDiff
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;