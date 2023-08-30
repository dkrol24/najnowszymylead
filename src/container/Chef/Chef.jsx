import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.q5} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">
        Dojrzałe Serce Szuka Drugiej Połówki
      </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Po latach doświadczeń i wzlotów oraz upadków,
          </p>
        </div>
        <p className="p__opensans">
          jestem gotowy/gotowa na znalezienie kogoś szczególnego. Czy Twój
          dojrzały umysł i ciepłe serce mogą być tym, czego szukam?
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
