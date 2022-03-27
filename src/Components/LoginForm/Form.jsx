import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Input,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Form = ({ title, setEmail, setPassword, handleAction }) => {
  const navigate = useNavigate();
  const switchTab = () => {
    if (title === "Login") navigate("/register");
    else navigate("/login");
  };

  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{ height: "100vh" }}
    >
      <Text h2 align="center">
        {title}
      </Text>
      <Spacer y={1} />
      <Grid.Container gap={4} justify="center">
        <Grid sm={6} md={4} className="">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            labelPlaceholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid sm={6} md={4} className="">
          <Input.Password
            name="password"
            type="password"
            placeholder="Password"
            labelPlaceholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Container className="">
        <Row justify="center" align="center">
          <Button onClick={handleAction}>{title}</Button>
        </Row>
      </Container>
      <Spacer y={1} />
      <Container>
        <Row justify="center" align="center">
          {title === "Login"
            ? "Already have an account?"
            : "Don't have an account?"}
          <Button light color="primary" auto onClick={switchTab}>
            {title === "Login" ? "Sign In" : "Sign Up"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Form;
