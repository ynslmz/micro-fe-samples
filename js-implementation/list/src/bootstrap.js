import data from "../../db/data.json";
import _ from "lodash";

let appName = "List Application is running";

let html = "<ul>";
for (const d of data.list) {
  html += `<li onclick="javascript:window.location.href = '?item_id=${d.id}'">${d.title} </li> `;
}
html += "</ul>";
html += `<p>size: ${_.size(data.list)}</p>`;

document.getElementById("dev-list").innerHTML = appName + html;
