import React from "react";
import ListMaterial from "./ListMaterial";
import activities from "../activities.js";
function createList(listItem) {
  return (
    <ListMaterial
      key={listItem.id}
      
      
      content={listItem.content}
    />
  );
}

function List() {
  return (
    <div
      class="row"
      style={{ marginTop: "1rem", marginRight: "1 rem", marginLeft: "1rem" }}
    >
      {activities.map(createList)}
    </div>
  );
}

export default List;
