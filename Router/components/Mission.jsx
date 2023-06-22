import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();

  return (
    <>
      <div>Mission</div>
      <button
        onClick={() => {
          navigate("/"); //navigate(-1) dersen geldiğin yere gönderir.Ek bilgi
        }}
      >
        Geriye Git
      </button>
    </>
  );
}

export default Mission;
