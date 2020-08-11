import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" />
      </IconButton>
      <img
        className="header_img"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder-logo"
      />
      <IconButton>
        <ChatBubbleOutlineIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
