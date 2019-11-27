import React, { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router-dom'; 

import "./style.css";
import m1 from "../../assets/userMentor1.jpg";
import m8 from "../../assets/userMentor8.jpg";
import calendar from "../../assets/calendar.png";

import api from '../../services/api';
import { range } from '../../services/helpers'


export default function Details() {
  const { id } = useParams();
  const [mentors, setMentors] = useState([]);
  
  useEffect(() => {
    api
      .get(`/mentors/${id}`)
      .then(({ data }) => {
        let mentorsData = data.mentor;
        mentorsData.thumbnail_url = m1; 
        mentorsData.students = range(5, 30); 
        mentorsData.experince = range(80, 200); 

        setMentors([mentorsData]);
      })
      .catch(err => console.log(err));
  }, []);
  
  function handleClick() {
    // history.push("/details");
  }
  return (
    <>
      <div className="detail">
        <div className="detail-container">
          <ul className="mentor-details">
            {mentors.map(mentor => (
              <li key={mentor.name} onClick={() => handleClick()}>
                <img className="mentor-thumbnail" src={mentor.thumbnail_url} />
                <div className="details">
                  <p>
                    <strong>{mentor.name}</strong>
                  </p>
                  <p>{mentor.course}</p>
                  <p>{mentor.university}</p>
                  <p>
                    <span>{mentor.semester} semestre</span>
                  </p>
                  <div className="skills-wrapper">
                    {mentor.skills.slice(0,6).map(skill => (<div className="skill">{skill.name}</div>))}
                  </div>
                </div>
                <div className="students">
                  <p>
                    <strong>{mentor.students}</strong>
                  </p>
                  <p>Alunos</p>
                </div>
                <div className="experince">
                  <p>
                    <strong>{mentor.experince}</strong>
                  </p>
                  <p>Experiência</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="about">
            <h3>Sobre</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="testimony">
          <h3>Depoimentos</h3>
          <img className="testimony-thumbnail" src={m8} />
          <p>
            <strong>Camilo Faria</strong>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="details-price">
        {mentors.map(mentor => (
          <div className="detail-price">
            <img src={calendar} height="120" />
            <p>
              <span>{mentor.price ? `R$ ${mentor.price}` : "Gratuito"}</span>
            </p>
            <p className="mentor">Mentoria</p>
            <button onClick={() => handleClick()}>Agendar</button>
          </div>
        ))}
      </div>
    </>
  );
}
