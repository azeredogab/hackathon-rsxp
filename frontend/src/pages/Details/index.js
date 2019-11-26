import React, { useEffect, useState, useMemo } from "react";

import "./style.css";
import m1 from "../../assets/userMentor1.jpg"

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
          </li>
        ))}
        </ul>
      </div>
      <div className="detail-price"> 
      {mentors.map(mentor => (
        <div className="detail-price">
          <p><span>{mentor.price ? `R$ ${mentor.price}` : "Gratuito"}</span></p>
          <p className="mentor">Mentoria</p>
          <button onClick={() => handleClick()}>Ver detalhes</button>
        </div>
       ))}
      </div>
    </>
  );
}
