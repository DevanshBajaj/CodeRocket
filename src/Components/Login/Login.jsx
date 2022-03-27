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

const initialState = {
  fullName: "",
  username: "",
  password: "",
  phoneNumber: "",
  github: "",
  codeforces: "",
  codechef: "",
  leetcode: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const switchTab = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <Container>
      <Text h2 align="center">
        {isSignup ? "Sign Up" : "Sign In"}
      </Text>
      <Spacer y={1} />
      <form onSubmit={handleSubmit}>
        {isSignup ? (
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
                name="username"
                type="text"
                placeholder="Username"
                labelPlaceholder="Username"
                onChange={handleFormData}
                required
              />
            </Grid>
            <Grid sm={6} md={4} className="">
              <Input.Password
                name="password"
                type="password"
                placeholder="Password"
                labelPlaceholder="Password"
                onChange={handleFormData}
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
                name="username"
                type="text"
                placeholder="Username"
                labelPlaceholder="Username"
                onChange={handleFormData}
                required
              />
            </Grid>
            <Grid sm={6} md={4} className="">
              <Input
                name="password"
                type="text"
                placeholder="Password"
                labelPlaceholder="Password"
                onChange={handleFormData}
                required
              />
            </Grid>
          </Grid.Container>
        )}
        <Spacer y={1} />
        <Container className="">
          <Row justify="center" align="center">
            <Button type="submit">{isSignup ? "Sign Up" : "Sign In"}</Button>
          </Row>
        </Container>
        <Spacer y={1} />
      </form>
      <Container>
        <Row justify="center" align="center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <Button light color="primary" auto onClick={switchTab}>
            {isSignup ? "Sign In" : "Sign Up"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
