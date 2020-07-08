import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { Link, useLocation, useHistory } from "react-router-dom";

function Auth(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const account = localStorage.getItem("account");
  const location = useLocation();
  const history = useHistory();
  if (account) history.push({ pathname: "/newsfeed" });
  const pathname = location.pathname;
  function handleInputChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleClick() {
    let account = { email: email, pwd: password };
    if (account.email && account.pwd) {
      localStorage.setItem("account", JSON.stringify(account));
      history.push({ pathname: "/newsfeed" });
    }
  }
  return (
    <div className="auth d-flex align-items-center text-dark">
      <Container>
        <Row className="justify-content-center">
          <Col
            xs="10"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-none d-sm-flex justify-content-center align-items-center">
              <img
                alt="auth"
                src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fundraw_enter_uhqk.svg?v=1593830070573"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              {pathname === "/user/create" && (
                <h1 className="font-weight-bold">Create Account</h1>
              )}
              {pathname !== "/user/create" && (
                <h1 className="font-weight-bold">Login</h1>
              )}
              <Form>
                <Input
                  type="text"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
                <Button onClick={handleClick}>Submit</Button>
              </Form>
              {pathname !== "/user/create" && (
                <p>
                  Forgot{" "}
                  <span className="font-weight-bold">Username/Password</span>
                </p>
              )}
              {pathname === "/user/create" && (
                <Link to="/user/login" className="mt-auto">
                  Login your <span className="font-weight-bold">Account</span> >
                </Link>
              )}
              {pathname !== "/user/create" && (
                <Link to="/user/create" className="mt-auto">
                  Create your <span className="font-weight-bold">Account</span>{" "}
                  >
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
