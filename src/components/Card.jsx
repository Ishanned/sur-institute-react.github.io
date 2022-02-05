import React from "react";
import CardMaterial from "./CardMaterial";
import list from "../vision_mission";
function createCard(cardItem) {
  return (
    <CardMaterial
      key={cardItem.id}
      img={cardItem.img}
      title={cardItem.title}
      content={cardItem.content}
    />
  );
}

function Card() {
  return (
    <div
      class="row"
      style={{ marginTop: "1rem", marginRight: "1 rem", marginLeft: "1rem" }}
    >
      {list.map(createCard)}
    </div>
  );
}

export default Card;
