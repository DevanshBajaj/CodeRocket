import React, { useState, useEffect } from "react";
import "./App.css";
import styles from "../styles/Home.module.css"
import { ApolloProvider, createHttpLink } from "@apollo/client";
import { Button, NextUIProvider, Text } from "@nextui-org/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { globalCss } from '@nextui-org/react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { app } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Login from "./Components/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";

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
  globalCss();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          // if (error.message === "auth/wrong-password") {
          //   toast.error("Please check the Password");
          // }
          // if (error.message === "INVALID_EMAIL") {
          //   toast.error("Please check the Email");
          // }

          toast.error(error.message);
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Login
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
        <ToastContainer />
      </ApolloProvider>
    </NextUIProvider>
  );
}

export default App;
