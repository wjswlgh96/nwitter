import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}의 프로필</Link>
      </li>
    </ul>
  );
};

export default Navigation;
