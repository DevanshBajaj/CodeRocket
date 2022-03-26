import "./App.css";
import { ApolloProvider, createHttpLink } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Leetcode from "./Components/Leetcode";
import Codeforces from "./Components/Codeforces";
import Github from "./Components/Github";

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
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <h1>github</h1>
        <Github />
        <h1>Leetcode</h1>
        <Leetcode />
        <h1>Codeforces</h1>
        <Codeforces />
      </ApolloProvider>
    </NextUIProvider>
  );
}

export default App;
