console.log("Detail page is running");
import data from "../../db/data.json";

let detailText = "";
const id = Number(getParameter("item_id"));
if (id) {
  detailText += `<p>${data.list.find((i) => i.id == id).detail}<p>`;

  document.getElementById("dev-detail").innerHTML = detailText;
}

function getParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
