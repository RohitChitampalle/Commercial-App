import PRODUCT from "./Product.json";
import { useState } from "react";
export default function App() {
  let [products] = useState(PRODUCT);
  return (
    <>
      <section className="mainBlock">
        <article>
          {products.map(e => {
            return (
              <main className="container">
                <figure>
                  <img src={e.image} alt="" />
                </figure>
                <aside>
                  <h1>{e.title.slice(0, 20) + "..."}</h1>
                  <p className="category">
                    <span className="left">{e.id}</span>
                    <span className="center">{e.category}</span>
                    <span className="right">{e.rating.rate}</span>
                  </p>
                  <p className="price">
                    <span>
                      &#x20B9;<span>{e.price}</span>
                    </span>
                  </p>
                  <p>{e.description.slice(0, 50) + "..."}</p>
                  <p className="btnParent">
                    <button>view more</button>
                  </p>
                </aside>
              </main>
            );
          })}
        </article>
      </section>
    </>
  );
}
