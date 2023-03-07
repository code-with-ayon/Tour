import React from "react";
import "./DestinationStyles.css";
import Mount1 from "../assets/img.jpg";
import Mount2 from "../assets/img2.jpg";

import Mount3 from "../assets/img3.jpg";
import Mount4 from "../assets/img4.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="Destination">
      <h1>Popular Destination</h1>
      <p>Tours give the opportunity to see a lot, within a time frame</p>
      <DestinationData className="first-des"
        heading="Taal Volcano, Batangas"
        text=" Taal Volcano is part of a chain of volcanoes lining the western edge
        of the island of Luzon. They were formed by the subduction of the
        Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies
        within a 25–30 km (16–19 mi) caldera formed by explosive eruptions
        between 140,000 and 5,380 BP.[4] Each of these eruptions created
        extensive ignimbrite deposits reaching as far away as present-day
        Manila.[11] Taal Volcano and Lake are entirely located in the
        province of Batangas. The northern half of Volcano Island falls
        under the jurisdiction of the lake shore town of Talisay, and the
        southern half in San Nicolas. The other communities that encircle
        Taal Lake include the cities of Tanauan and Lipa, and the
        municipalities of Talisay, Laurel, Agoncillo, Santa Teresita, San
        Nicolas, Alitagtag, Cuenca, Balete, and Mataasnakahoy.[12]"
        img1={Mount1}
        img2={Mount2}
      />
      <DestinationData className="first-des-reverse"
        heading="Abruzzo, Italy"
        text="Stretching from the heart of the Apennines to the Adriatic Sea on the peninsula's southeastern side, Abruzzo, Italy has long been one of the country's most overlooked destinations despite its unspoiled villages, picturesque Trabocchi Coast, and stunning natural escapes. Over the past few years, however, it has gone from a sleepy underdog to an ambitious harbinger of slow travel, sustainable gastronomy, and conscious hospitality. Villa Corallo, a 19th-century mansion near Civitella del Tronto was transformed into a five-star hotel in 2019. Dimore Montane, an eco-lodge opened in 2020 in Majella National Park, marries glamping with environmentally-friendly facilities with a zero waste policy. Meanwhile, restaurants like Bottega Culinaria in San Vito Chietino and Materia Prima in Castel di Sangro are redefining the region as one of Italy's most exciting food hotspots for their innovative and sustainable takes on local produce and traditional dishes (in case Niko Romito's three-Michelin-starred Reale wasn't enough)."
        img1={Mount3}
        img2={Mount4}
      />
    </div>
  );
};

export default Destination;
