import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Menu from "./Menu";

export default function(props) {
  function handleLogOut() {
    localStorage.clear();
  }
  return (
    <div className="profile">
      <Menu />
      <Container>
        <p className="text-center">Profile</p>
        <Row className="my-5 justify-content-center">
          <Col md="8" lg="7">
            <div className="d-flex align-items-center mb-3">
              <img alt="avt" src={`https://picsum.photos/300`} />
              <div>
                <p>Duy Khanh</p>
                <p>@lordshenk</p>
              </div>
            </div>
            <div>
              <p title="followers">
                <img
                  alt="followers"
                  src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fuser%20(1).svg?v=1593959517358"
                />
                <span>29 </span>followers
              </p>
              <p title="likes">
                <img
                  alt="likes"
                  src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fheart%20(1).svg?v=1593959503946"
                />
                <span>707 </span>likes posts
              </p>
            </div>
            <div className="d-flex">
              <Link to="/" onClick={handleLogOut}>
                <div title="log out">
                  <img
                    alt="log out"
                    src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fclose.svg?v=1594135641212"
                  />
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-center">Browse Posts</p>
        <Row className="my-5 justify-content-center">
          <Col
            md="8"
            lg="7"
            className="d-flex flex-wrap justify-content-between"
          >
            <img alt="img" src="https://picsum.photos/800?random=1" />
            <img alt="img" src="https://picsum.photos/800?random=2" />
            <img alt="img" src="https://picsum.photos/800?random=3" />
            <img alt="img" src="https://picsum.photos/800?random=4" />
            <img alt="img" src="https://picsum.photos/800?random=5" />
            <img alt="img" src="https://picsum.photos/800?random=6" />
            <img alt="img" src="https://picsum.photos/800?random=7" />
            <img alt="img" src="https://picsum.photos/800?random=8" />
            <img alt="img" src="https://picsum.photos/800?random=9" />
            <img alt="img" src="https://picsum.photos/800?random=10" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
