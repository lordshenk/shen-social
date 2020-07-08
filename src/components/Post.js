import React from "react";
import { Container, Row, Col, Form, Input } from "reactstrap";
import Menu from "./Menu";

export default function Post(props) {
  return (
    <div className="post">
      <Menu />
      <Container>
        <p className="text-center">Post</p>
        <Row className="my-5 justify-content-center">
          <Col md="8" lg="7">
            <Form>
              <Input type="textarea" placeholder="What's on your mind ?" />
            </Form>
            <div className="d-flex">
              <div title="add image">
                <img
                  alt="img"
                  src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fphoto%20(1).svg?v=1594133496732"
                />
              </div>
              <div title="post">
                <img
                  alt="post"
                  src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Farrow.svg?v=1594048486469"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
