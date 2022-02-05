import React from "react";

function ListMaterial(props) {
  return (
  <ul class="list-group">
  <li class="list-group-item">{props.content}</li>
  </ul>
  );
}

export default ListMaterial;
