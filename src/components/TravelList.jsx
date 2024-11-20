//CSS
import "./TravelList.css";

//ASSETS
import travelPlansData from "../assets/travel-plans.json";

//HOOKS
import { useState } from "react";

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);
  return (
    <section className="card-wrapper">
      {travelList.map(
        ({
          id,
          destination,
          image,
          days,
          allinclusive,
          totalCost,
          description,
          parts,
        }) => {
          return (
            <article key={id}>
              <img src={image} alt="image" />
              <div>
                <h2>
                  {destination} ({days} Days)
                </h2>
                <p>{description}</p>
                <b>Price: </b>
                <span>{totalCost}€</span>
              </div>
            </article>
          );
        }
      )}
    </section>
  );
}

export default TravelList;
