import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href='https://www.linkedin.com/in/suryanshoo-kaushal-519498176/'
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href='mailto:suryanshoo.kaushal@gmail.com'
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-google" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href='#'
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-medium" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href='https://www.instagram.com/suryanshoo_07/'
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <span></span>
      </a>
    </div>
  );
}