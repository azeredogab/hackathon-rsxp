import React, { useEffect, useState, useMemo } from "react";

import "./style.css";
import m1 from "../../assets/userMentor1.jpg"
import m8 from "../../assets/userMentor8.jpg"
import calendar from "../../assets/calendar.png"

export default function Details() {

  const mentors = [
    {
      name: 'Claudia Silva',
      age: 21,
      course: 'Analise de Sistemas',
      university: 'Unip',
      semester: 'Terceiro',
      price: 15.00,
      thumbnail_url: m1,
      students: 20,
      experince: '10h'
    }, 
  ];

  function handleClick() {
    // history.push("/details");
  }
  return (
    <>
      <div className="detail-container">
        <ul className="mentor-details">
        {mentors.map(mentor => (
          <li key={mentor.name} onClick={() => handleClick()}>
            <img className="mentor-thumbnail" src={mentor.thumbnail_url} />
            <div className="details">
              <p><strong>{mentor.name}</strong></p>
              <p>{mentor.course}</p>
              <p>{mentor.university}</p>
              <p><span>{mentor.semester} semestre</span></p>
            </div>
            <div className="students">
              <p><strong>{mentor.students}</strong></p>
              <p>Alunos</p>
            </div>
            <div className="experince">
              <p><strong>{mentor.experince}</strong></p>
              <p>Experiência</p>
            </div>
            
          </li>
        ))}
        </ul>
      </div>
      <div className="details-price"> 
      {mentors.map(mentor => (
        <div className="detail-price">
          <img src={calendar} height="120" />
          <p><span>{mentor.price ? `R$ ${mentor.price}` : "Gratuito"}</span></p>
          <p className="mentor">Mentoria</p>
          <button onClick={() => handleClick()}>Agendar</button>
        </div>
       ))}
      </div>
      <div className="about">
        <h3>Sobre</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <div className="testimony">
        <h3>Depoimentos</h3>
        <img className="testimony-thumbnail" src={m8} />
        <p><strong>Camilo Faria</strong></p>
        <p>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>


      </div>

    </>
  );
}
