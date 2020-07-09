import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { Container, Row, Col } from "reactstrap";
import users from "../data";

export default function Following(props) {
  const [ignoreUser, setIgnoreUser] = useState([]);

  function handleClickHeart(e) {
    let element = e.currentTarget;
    setIgnoreUser([...ignoreUser, element.id]);
  }
  useEffect(() => {
    window.scrollTo( 0, 0)
  }, [])
  return (
    <div className="following">
      <Menu />
      <Container>
        <p className="text-center">Browse Following</p>
        {users.map((ele, ind) => {
          for (let i of ignoreUser) {
            if (i === String(ind)) return null;
          }
          if (ind < 10)
            return (
              <Row key={ind} className="my-5 justify-content-center">
                <Col md="8" lg="7">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      alt="avt"
                      src={`https://picsum.photos/100?random=${ind}`}
                    />
                    <div>
                      <p>{ele.name}</p>
                      <p>{"@" + ele.user_name}</p>
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>{ind * 290 + 92} </span>followers
                    </p>
                    <p>
                      <span>{ind * 992 + 290} </span>likes posts
                    </p>
                  </div>
                  <div className="d-flex">
                    <div
                      onClick={handleClickHeart}
                      className="clicked-heart"
                      title="unfollow"
                      id={ind}
                    >
                      <img
                        alt="heart"
                        src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fheart.svg?v=1593905887346"
                      />
                    </div>
                    <div title="share">
                      <img
                        alt="share"
                        src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fgps.svg?v=1593905893705"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            );
          return null;
        })}
      </Container>
    </div>
  );
}
