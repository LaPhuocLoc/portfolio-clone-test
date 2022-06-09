import React from "react";
import "./info.scss";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
const info = {
  firstName: "La",
  lastName: "Phuoc Loc",
  birthday: "22 Years",
  sex: "Male",
  nation: "Vietnam",
  address: "Japan",
  phone: "07089592xxx",
  email: "cxxx150@ccg.ac.jp",
  facebook: "facebook.com/loc.la.xxx3",
  git: "https://github.com/xxLoc",
  language: "ベトナム語、日本語",
};
const card = [
  {
    title: "1",
    text: "years of",
    span: "experience",
  },
  {
    title: "7",
    text: "completed",
    span: "projects",
  },
  {
    title: "1",
    text: "Happy",
    span: "Customer",
  },
  {
    title: "1",
    text: "Award",
    span: "Won",
  },
];
const Info = () => {
  return (
    <div className="info">
      <div className="info__basic" data-aos="fade-up-right">
        <h3>personal infos</h3>
        <ul className="info-list">
          <li>
            <span>First Name: </span>
            {info.firstName}
          </li>
          <li>
            <span>Last Name: </span>
            {info.lastName}
          </li>
          <li>
            <span>Birthday: </span>
            {info.birthday}
          </li>
          <li>
            <span>Sex: </span>
            {info.sex}
          </li>
          <li>
            <span>National: </span>
            {info.nation}
          </li>
          <li>
            <span>Address: </span>
            {info.address}
          </li>
          <li>
            <span>Phone: </span>
            {info.phone}
          </li>
          <li>
            <span>Facebook: </span>
            {info.facebook}
          </li>
          <li>
            <span>Language: </span>
            {info.language}
          </li>
          <li>
            <span>Email: </span>
            {info.email}
          </li>
        </ul>
        <Button>
          <a
            href="https://drive.google.com/file/d/14BNcLxvB7DAkVSYYgVbuBf9fup7E4eNB"
            rel="noopener"
            download
          >
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </Button>
      </div>
      <div className="info__more" data-aos="fade-up-left">
        {card.map((item, i) => (
          <div className="info__more__card" key={i}>
            <h3>
              {item.title}
              <i className="bx bx-plus bx-rotate-90"></i>
            </h3>
            <p>
              {item.text} <span>{item.span}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
