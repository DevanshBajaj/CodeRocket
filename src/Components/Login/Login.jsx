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
import styles from "./../Profiles/Github.module.css";

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
      <Text b size="4rem" className="navbar">CodeRocket 🚀 </Text>
      <Text h2 align="center">
        {title === "Register" ? "Register" : "Login"}
      </Text>
      <Spacer y={1} />
      {title === "Register" ? (
        <div className={styles.loginGrid}>
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name"
            labelPlaceholder="Full Name"
            onChange={handleFormData}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="E-Mail"
            labelPlaceholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input.Password
            name="password"
            type="password"
            placeholder="Password"
            labelPlaceholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            labelPlaceholder="Phone Number"
            onChange={handleFormData}
            required
          />
          <Input
            name="github"
            type="text"
            placeholder="Github Username"
            labelPlaceholder="Github Username"
            onChange={handleFormData}
            required
          />
          <Input
            name="codeforces"
            type="text"
            placeholder="Codeforces Username"
            labelPlaceholder="Codeforces Username"
            onChange={handleFormData}
            required
          />
          <Input
            name="codechef"
            type="text"
            placeholder="Codechef Username"
            labelPlaceholder="Codechef Username"
            onChange={handleFormData}
            required
          />
          <Input
            name="leetcode"
            type="text"
            placeholder="Leetcode Username"
            labelPlaceholder="Leetcode Username"
            onChange={handleFormData}
            required
          />
        </div>
      ) : (
        <Grid.Container gap={2} justify="center">
          <Grid md={1.8} className="">
            <Input
              name="email"
              type="email"
              placeholder="E-Mail"
              labelPlaceholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid md={1.6} className="">
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
        <Row justify="center" align="center" gap={2}>
          {title === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Spacer y={0.5} />
          <Button light color="primary" auto onClick={switchTab}>
            {title === "Login" ? "Register" : "Login"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
