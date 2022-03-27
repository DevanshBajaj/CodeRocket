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

const initialState = {
  fullName: "",
  phoneNumber: "",
  github: "",
  codeforces: "",
  codechef: "",
  leetcode: "",
};

const Login = ({ title, setEmail, setPassword, handleAction }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const switchTab = () => {
    if (title === "Login") navigate("/register");
    else navigate("/login");
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (title === "Register") {
      localStorage.setItem("profiles", JSON.stringify(formData));
      handleAction();
    } else {
      handleAction();
    }
  };

  return (
    <Container>
      <Text h2 align="center">
        {title === "Register" ? "Register" : "Login"}
      </Text>
      <Spacer y={1} />
      {title === "Register" ? (
        <Grid.Container gap={4} justify="center">
          <Grid sm={6} md={4} className="">
            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              labelPlaceholder="Full Name"
              onChange={handleFormData}
              required
            />
          </Grid>
          <Grid sm={6} md={4} className="">
            <Input
              name="email"
              type="email"
              placeholder="E-Mail"
              labelPlaceholder="E-Mail"
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
          <Grid sm={6} md={4} className="">
            <Input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              labelPlaceholder="Phone Number"
              onChange={handleFormData}
              required
            />
          </Grid>
          <Grid sm={6} md={4} className="">
            <Input
              name="github"
              type="text"
              placeholder="Github Username"
              labelPlaceholder="Github Username"
              onChange={handleFormData}
              required
            />
          </Grid>
          <Grid sm={6} md={4} className="">
            <Input
              name="codeforces"
              type="text"
              placeholder="Codeforces Username"
              labelPlaceholder="Codeforces Username"
              onChange={handleFormData}
              required
            />
          </Grid>
          <Grid sm={6} md={4} className="">
            <Input
              name="codechef"
              type="text"
              placeholder="Codechef Username"
              labelPlaceholder="Codechef Username"
              onChange={handleFormData}
              required
            />
          </Grid>
          <Grid sm={6} md={4} className="">
            <Input
              name="leetcode"
              type="text"
              placeholder="Leetcode Username"
              labelPlaceholder="Leetcode Username"
              onChange={handleFormData}
              required
            />
          </Grid>
        </Grid.Container>
      ) : (
        <Grid.Container gap={4} justify="center">
          <Grid sm={6} md={4} className="">
            <Input
              name="email"
              type="email"
              placeholder="E-Mail"
              labelPlaceholder="E-Mail"
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
      )}
      <Spacer y={1} />
      <Container className="">
        <Row justify="center" align="center">
          <Button onClick={handleSubmit}>
            {title === "Register" ? "Resgister" : "Login"}
          </Button>
        </Row>
      </Container>
      <Spacer y={1} />
      <Container>
        <Row justify="center" align="center">
          {title === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Button light color="primary" auto onClick={switchTab}>
            {title === "Login" ? "Register" : "Login"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
