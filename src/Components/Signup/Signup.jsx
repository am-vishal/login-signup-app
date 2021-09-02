import React, { useState, useForm, useRef } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import {
  Container,
  Jumbotron,
  Button,
  Form,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isContactValid, setIsContactValid] = useState(true);
  const [signUpObj, setSignUpObj] = useState({
    phone: "",
  });

  //null
  //separte pass & conf

  const handleValidation = () => {
    if (password === "" || confirmpassword === "") {
      console.log("enter password");
    } else if (
      password === confirmpassword
      // "1" === 1
      // password.match(confirmpassword)
    ) {
      alert("password match");
    } else {
      console.err("err");
    }
  };

  const changeHandler = (event) => {
    let newState = { ...signUpObj };
    let val = event.target.value;
    if (val.length === 10) {
      setIsContactValid(true);
    } else {
      setIsContactValid(false);
    }
    newState.phone = val;
    setSignUpObj(newState);
  };

  return (
    <div className="text-center">
      <Container className="p-5" style={{ maxWidth: "45em" }}>
        <Jumbotron className="pb-10">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <InputGroup className="m-2">
                <InputGroup.Text>First Name</InputGroup.Text>
                <FormControl
                  placeholder="First Name"
                  type="text"
                  className="mr-3"
                  required
                />
              </InputGroup>

              <InputGroup className="m-2">
                <InputGroup.Text>Last Name</InputGroup.Text>
                <FormControl
                  placeholder="Last Name"
                  type="text"
                  className="mr-3"
                  required
                />
              </InputGroup>

              <InputGroup className="m-2">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="mr-3"
                  required
                />
              </InputGroup>

              <InputGroup className="m-2">
                {/* <InputGroup.Text>Phone</InputGroup.Text> */}
                <label
                  className={!isContactValid ? "text-danger" : "text-dark"}
                >
                  Phone
                </label>
                <FormControl
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="mr-3"
                  onChange={changeHandler}
                  required
                />
                {isContactValid ? null : (
                  <span className="text-danger">not a valid number</span>
                )}
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

              <InputGroup className="m-2">
                <InputGroup.Text>Confirm Password</InputGroup.Text>
                <FormControl
                  type="password"
                  placeholder="Confirm Your Password"
                  className="mr-3"
                  required
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // pattern="/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{6,32}$/"
                />
              </InputGroup>

              <DropdownButton
                title="Gender"
                className="text-left m-2"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">Male</Dropdown.Item>
                <Dropdown.Item eventKey="2">Female</Dropdown.Item>
              </DropdownButton>
              <Form.Check
                className="text-left m-2"
                type="checkbox"
                label="Remember me"
              />
              <Button
                variant="primary"
                type="submit"
                onClick={handleValidation}
              >
                Sign Up
              </Button>
            </Form.Group>
            <p>or</p>
            <Link to="/login">Login</Link>
          </Form>

          {/* <ButtonToolbar className="custom-btn-toolbar">
            <Button className="m-1">Home</Button>
            <Button className="m-1">Signup</Button>
            <Button className="m-1">Dashboard</Button>
            <img src="/Asset/Images/userimage.png" alt="user-null" />
          </ButtonToolbar>

          <img
            src="https://react-bootstrap.github.io/TheresaKnott_castle.svg"
            alt="castle-img"
            className="rounded mx-auto d-block"
            fluid
          /> */}
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Signup;
