import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

const root = document.getElementById("root");

let links = document.querySelectorAll("a");

let routes = {
  "/": renderHome,
  "/menu": renderMenu,
  "/contacts": renderContact,
};

links.forEach((link) => link.addEventListener("click", changeRoute));

function changeRoute(e) {
  e.preventDefault();
  root.innerHTML = "";
  const path = e.target.pathname;
  const render = routes[path];
  if (render) render(root);
  return false;
}
renderHome(root);
