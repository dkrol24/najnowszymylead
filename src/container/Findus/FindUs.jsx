import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Miłość po 30: Gotowi na Nowy Rozdział?
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Życie zaczyna się po 30,</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          a miłość może kwitnąć w najbardziej nieoczekiwanych momentach.
        </p>
        <p className="p__opensans">
          Jeśli jesteś gotowy/gotowa na nowy rozdział pełen emocji, radości i
          zaufania, to chętnie poznamy się bliżej.
        </p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Zobacz
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.q6} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
