import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Szukam Prawdziwej Miłości</h1>
        <img src={images.q2} alt="about_spoon" style={{ width: "200px" }} />
        <p className="p__opensans">
          Jestem osobą, która wierzy w prawdziwą miłość, w te iskry, które
          migoczą w oczach podczas pierwszego spotkania. Czy Ty także szukasz
          tej wyjątkowej osoby, z którą będziemy mogli razem budować piękną
          historię?
        </p>
        <button type="button" className="custom__button">
          Zobacz
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.q4} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Wspólne Pasje i Nowe Przygody</h1>
        <img src={images.q3} alt="about_spoon" style={{ width: "200px" }} />
        <p className="p__opensans">
          Moje życie jest pełne pasji i ciekawych zainteresowań. Czy jesteś
          gotów/gotowa podzielić się swoimi pasjami ze mną? Razem możemy
          odkrywać nowe przygody i tworzyć wspomnienia, które będą nas
          inspirować każdego dnia.
        </p>
        <button type="button" className="custom__button">
          Wchodzę
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
