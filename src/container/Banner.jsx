import React, { useEffect } from "react";

function BannerComponent() {
  useEffect(() => {
    // Stworzenie elementu script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "C4kJ_fKJb_cKp0_J5Qxr2rL";
    script.src = "https://d-track1.pl/js/script_C4kJ_fKJb_cKp0_J5Qxr2rL.js";

    // Dodanie elementu script do drzewa DOM
    document.head.appendChild(script);

    // Funkcja czyszcząca efekt uboczny po odmontowaniu komponentu
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po zamontowaniu

  return (
    <div style={{ width: "200px", height: "300px" }}>
      {/* Placeholder dla banera */}
    </div>
  );
}

export default BannerComponent;
