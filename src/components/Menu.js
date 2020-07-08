import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";

export default function Menu(props) {
  const { pathname } = useLocation();

  return (
    <Container className="menu d-flex justify-content-around align-items-center">
      <Link to="/newsfeed" className={pathname === "/newsfeed" ? "active" : ""}>
        <img
          alt="img"
          src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fhome%20(2).svg?v=1593959510839"
        />
      </Link>
      <Link
        to="/following"
        className={pathname === "/following" ? "active" : ""}
      >
        <img
          alt="img"
          src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fuser%20(1).svg?v=1593959517358"
        />
      </Link>
      <Link to="/post" className={pathname === "/post" ? "active" : ""}>
        <img
          alt="img"
          src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fedit.svg?v=1593905918232"
        />
      </Link>
      <Link
        to="/user/profile"
        className={pathname === "/user/profile" ? "active" : ""}
      >
        <img
          alt="img"
          src="https://cdn.glitch.com/0f8d1619-f000-4568-8076-38773ae9a9f4%2Fuser%20(2).svg?v=1593959505771"
        />
      </Link>
    </Container>
  );
}
