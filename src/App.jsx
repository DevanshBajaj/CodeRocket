import './App.css'
import { ApolloProvider, createHttpLink } from '@apollo/client';
import Github from './Components/Github';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
      <h1>github</h1>
      <Github />
    </ApolloProvider>

  )
}

export default App
