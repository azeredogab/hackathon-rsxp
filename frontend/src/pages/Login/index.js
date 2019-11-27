import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // const response = await api.post("/sessions", { email });

    // const { _id } = response.data;

    // localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <div className="wrapper">
      <p>
        O iCode veio para o mundo para conectar pessoas em busca de estágio e
        cursos complementares e pessoas do ensino médio a apreender o mundo da
        programação.
      </p>

      <p>Aluno se cadastre aqui.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Seu e-mail."
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
