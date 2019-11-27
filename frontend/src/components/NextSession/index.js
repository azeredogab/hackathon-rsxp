import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import m2 from "../../assets/userMentor2.jpg";
import m3 from "../../assets/userMentor3.jpg";
import stars from "../../assets/stars.png";

export default function NextSession() {
  return (
    <div>
      <h2>PRÓXIMAS SESSÕES</h2>

      <div className="container-next-session">
        <div className="box-next-session">
          <div className="mentor-details">
            <div>
              <img className="mentor-thumbnail" src={m3} />
            </div>

            <div className="details">
              <p>
                <strong>Claudia Silva</strong>
              </p>
              <p>Analise de Sistemas</p>
              <p>Unip</p>
              <p>
                <span>6º semestre</span>
              </p>
            </div>
          </div>

          <div className="btn-red">
            <Link to="/videocall">INICIAR SESSÃO</Link>
          </div>
        </div>

        <div className="box-next-session">
          <div className="mentor-details">
            <div>
              <img className="mentor-thumbnail" src={m2} />
            </div>

            <div className="details">
              <p>
                <strong>Marvin Herzog</strong>
              </p>
              <p>Analise de Sistemas</p>
              <p>Unip</p>
              <p>
                <span>6º semestre</span>
              </p>
            </div>
          </div>

          <div className="btn-red">
            <p>
              29/11
              <br />
              às
              <br />
              15h00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
