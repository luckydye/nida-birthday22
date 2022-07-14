const modules = import.meta.globEager("./components/*");

import { cards } from "../dist/cards.json";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.removeAttribute("loading");
    window.dispatchEvent(new CustomEvent("cards", { detail: cards }));
  }, 1000);
});

const updateScroll = () => {
  document.body.style.setProperty("--scrollY", window.scrollY.toString());
};

window.addEventListener("scroll", updateScroll);
updateScroll();
