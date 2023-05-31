import React, { useState, useEffect } from "react";
import { getLists } from "../api/note.api";
import List from "../components/List";

function Home() {
  const [lists, setLists] = useState([]);

  //controlamos la cantidad de recargas al iniciar en el navegador
  useEffect(() => {
    loadLists();
  }, []);

  async function loadLists() {
    const response = await getLists();
    setLists(response.data);
  }

  function renderMain() {
    if (lists.length === 0) return <h1>No se tienen notas</h1>;
    return lists.map((list) => <List note={list} key={list.id} />);
  }

  return (
    <div>
      <div className="home-container">
        <header></header>
        <section>
          <div>{renderMain()}</div>
        </section>
      </div>
    </div>
  );
}

export default Home;
