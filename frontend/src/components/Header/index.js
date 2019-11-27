import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import search from "../../assets/search.png";
import m1 from "../../assets/userMentor1.jpg";

// import { Container } from './styles';

export default function Header() {
  return (
    <div className="header">
      <div className="container-menu">
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Encontre um mentor</li>
          <li>
            <img src={search} />
          </li>
        </ul>

        <div className="aluno">
          <span>
            <strong>Vanessa</strong>
            <br />
            R$50,00
          </span>
          <img className="mentor-thumbnail" src={m1} />
        </div>
      </div>
    </div>
  );
}
