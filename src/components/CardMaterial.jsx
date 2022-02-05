import React from "react";

function CardMaterial(props) {
  return (
    <div class="col-lg-4">
      <div
        class="card h-100 w-100"
        style={{ width: "18rem", display: "inline-flex", flexWrap: "nowrap" }}
      >
        <img src={props.img} class="card-img-top h-50" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMaterial;
