import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import m1 from "../../assets/userMentor1.jpg"
import m2 from "../../assets/userMentor2.jpg"
import m3 from "../../assets/userMentor3.jpg"
import m4 from "../../assets/userMentor4.jpg"
import m5 from "../../assets/userMentor5.jpg"
import m6 from "../../assets/userMentor6.jpg"
import m7 from "../../assets/userMentor7.jpg"
import m8 from "../../assets/userMentor8.jpg"
import m9 from "../../assets/userMentor9.jpg"
import m10 from "../../assets/userMentor10.jpg"


export default function Dashboard({ history }) {

  const mentors = [
    {
      name: 'Claudia Silva',
      age: 21,
      course: 'Analise de Sistemas',
      university: 'Unip',
      semester: 'Terceiro',
      price: 15.00,
      thumbnail_url: m1,
    }, {
      name: 'Carlos Roberto',
      age: 23,
      course: 'Analise de Sistemas',
      university: 'Uninove',
      semester: 'Quarto',
      price: 12.00,
      thumbnail_url: m2,
    }, {
      name: 'Mariana Lima',
      age: 21,
      course: 'Analise de Sistemas',
      university: 'UBC',
      semester: 'Quinto',
      price: 13.00,
      thumbnail_url: m3,
    }, {
      name: 'Mariano Lima',
      age: 24,
      course: 'Analise de Sistemas',
      university: 'Uninove',
      semester: 'Quarto',
      price: 14.00,
      thumbnail_url: m4,
    }, {
      name: 'Rircardo Manolo',
      age: 21,
      course: 'Analise de Sistemas',
      university: 'Unip',
      semester: 'Sexto',
      price: 18.00,
      thumbnail_url: m5,
    },


    {
      name: 'Olavo Castro',
      age: 26,
      course: 'Analise de Sistemas',
      university: 'UBC',
      semester: 'Terceiro',
      price: 18.00,
      thumbnail_url: m6,
    }, {
      name: 'Victor Akemi',
      age: 22,
      course: 'Analise de Sistemas',
      university: 'Unip',
      semester: 'Quarto',
      price: 19.00,
      thumbnail_url: m7,
    }, {
      name: 'David Silva',
      age: 23,
      course: 'Analise de Sistemas',
      university: 'Uninone',
      semester: 'Quarto',
      price: 11.00,
      thumbnail_url: m8,
    }, {
      name: 'Camila Camilo',
      age: 21,
      course: 'Analise de Sistemas',
      university: 'UBC',
      semester: 'Quinto',
      price: 16.00,
      thumbnail_url: m9,
    }, {
      name: 'Daniel Oliveira',
      age: 22,
      course: 'Analise de Sistemas',
      university: 'Uninove',
      semester: 'Quarto',
      price: 11.00,
      thumbnail_url: m10,
    }
  ];

   function handleClick() {
    history.push("/details");
  }

  return (
    <>
      <h2>Mentores</h2>
      <ul className="mentor-list">
      {mentors.map(mentor => (
        <li key={mentor.name} onClick={() => handleClick()}>
          <img className="mentor-thumbnail" src={mentor.thumbnail_url} />
          <div className="details">
            <p><strong>{mentor.name}</strong></p>
            <p>{mentor.course}</p>
            <p>{mentor.university}</p>
            <p><span>{mentor.semester} semestre</span></p>
          </div>
          
          <div className="detail-price">
            <p><span>{mentor.price ? `R$ ${mentor.price}` : "Gratuito"}</span></p>
            <p className="mentor">Mentoria</p>
            <button onClick={() => handleClick()}>Ver detalhes</button>
          </div>

        </li>
      ))}
      </ul>
    </>
  );
}
