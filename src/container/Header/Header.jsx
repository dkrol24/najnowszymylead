import React from "react";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">
        Spojrzenie w Głębię Oczu - Randki dla Zaduszonych Duchów
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Moje oczy mówią historię, a moja dusza pragnie prawdziwego zrozumienia.
        Jeśli również jesteś tą osobą, która szuka ducha równie głębokiego jak
        Twoje, to może warto spróbować spojrzeć sobie w oczy?
      </p>
      <button type="button" className="custom__button">
        Zobacz
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.q12} alt="header_img" />
    </div>
  </div>
);

export default Header;
