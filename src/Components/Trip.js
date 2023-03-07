import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/trip2.jpg";
import Trip3 from "../assets/trip3.jpg";

import React from "react";

const Trip = () => {
  return (
    <div className="trip" id="section1">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Rajasthan"
          text="Rajasthan is where all the country's similes and metaphors appear to have come together. Sand dunes, wooded hills and amazing lakes, palaces and rugged forts, men and women in colorful turbans and skirts,"
        />
        <TripData
          image={Trip2}
          heading="Trip in  Gujarat"
          text="
 
          Aavo Padharo, words of welcome in the language of Gujarat because it is here that these words ring truly and the guest is 'God' and the people of Gujarat are gregariously friendly, inviting and will entice you to come again and again."
        />
        <TripData
          image={Trip3}
          heading="Trip in Bangkok"
          text="The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020, 15.3 percent of the country's population. Over 14 million people (22.2 percent) lived."
        />
      </div>
    </div>
  );
};

export default Trip;
