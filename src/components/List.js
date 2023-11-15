import { React, useState } from "react";
import data from "./data";

export default function List() {
  const [people, setPeople] = useState(data);

  function clearList() {
    setPeople([]);
  }
  return (
    <main>
      <section className="conatiner">
        <h3>{people.length} Birthday's today!</h3>

        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} className="birthday-image" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
        <button className="clear-button" onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  );
}
