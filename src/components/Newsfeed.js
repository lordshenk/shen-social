import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import users from "../data";
import Menu from "./Menu";

export default function Newsfeed(props) {
  const [updateComp, setUpdateComp] = useState(false);
  useEffect(() => {
    window.scrollTo( 0, 0)
  }, [])
  function handleClickHeart(e) {
    let element = e.currentTarget;
    if (!element.className) {
      e.currentTarget.title = "unlike";
      e.currentTarget.className = "clicked-heart";
    } else {
      e.currentTarget.title = "like";
      e.currentTarget.className = "";
    }
    let update = updateComp;
    setUpdateComp(update ? true : true);
  }
  return (
    <div className="news-feed">
      <Menu />
      <Container>
        <p className="text-center">Browse News</p>
        {users.map((ele, ind) => {
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
                  <img
                    alt="post"
                    src={`https://picsum.photos/800?random=${ind}`}
                    className="mb-3"
                  />
                  <p>
                    {ind % 2 === 0
                      ? "Yesterday is history, tomorrow is a mystery, and today is a gift... that's why they call it present"
                      : ind % 3 === 0
                      ? "If you only do what you can do, you will never be more than who you are"
                      : ind % 5 === 0
                      ? "You must believe!"
                      : ind % 7 === 0
                      ? "There is no secret ingredient"
                      : "You must let go of the illusion of control..."}
                  </p>
                  <p>
                    {ind < 3 || ind % 5 === 0
                      ? "few minutes ago"
                      : ind % 2 === 0
                      ? ind - 2 + " hours ago"
                      : ind + 2 + " hours ago"}
                  </p>
                </div>
                <div className="d-flex">
                  <div onClick={handleClickHeart} className="" title="like">
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
        })}
      </Container>
    </div>
  );
}
