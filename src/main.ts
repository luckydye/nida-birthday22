import "./components/Card";
import "./components/CardList";

import { cards } from "../dist/cards.json";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.removeAttribute("loading");
    window.dispatchEvent(new CustomEvent("cards", { detail: cards }));
  }, 1000);
});
