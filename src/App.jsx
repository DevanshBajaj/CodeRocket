import "./App.css";
import { ApolloProvider, createHttpLink } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Leetcode from "./Components/Leetcode";
import Codeforces from "./Components/Codeforces";
import Github from "./Components/Github";
import Codechef from "./Components/Codechef";
import Login from "./Components/Login/Login";
import { globalCss } from '@nextui-org/react';

const globalStyles = globalCss({
  body: { margin: "1rem" }
});

const githubLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const leetcodeLink = createHttpLink({
  // uri: "https://leetcode.com/graphql",
  uri: "https://salty-waters-49462.herokuapp.com/leetcode.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "leetcodeLink",
    leetcodeLink, // <= apollo will send to this if clientName is "leetcodeLink"
    authLink.concat(githubLink) // <= otherwise will send to this
  ),
  cache: new InMemoryCache(),
});


function App() {
  globalStyles();
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <Login />
        <Github />
        <Leetcode />
        <Codeforces />
        <Codechef />
      </ApolloProvider>
    </NextUIProvider>
  );
}

export default App;
