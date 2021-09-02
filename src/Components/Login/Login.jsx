import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  InputGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    if (email !== "" && strongPassword.test(password)) {
      history.push("/dashboard");
      console.log(strongPassword.test(password));
    } else {
      console.log("err");
    }
  };
  return (
    <div className="text-center">
      <Container className="p-5" style={{ maxWidth: "45em" }}>
        <Jumbotron className="pb-10">
          <Form>
            <InputGroup className="m-2">
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Your Email Address"
                className="mr-3"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="m-2">
              <InputGroup.Text>Password</InputGroup.Text>
              <FormControl
                type="password"
                placeholder="Enter Password"
                className="mr-3"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern="/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{6,32}$/"
              />
            </InputGroup>

            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login In
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Login;
