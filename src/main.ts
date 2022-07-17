const modules = import.meta.globEager("./components/*");

import { cards } from "../dist/cards.json";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.removeAttribute("loading");
    window.dispatchEvent(new CustomEvent("cards", { detail: cards }));
  }, 1000);
});

const updateScroll = () => {
  const v = Math.floor(window.scrollY / 20);
  if (v > 0) {
    document.body.removeAttribute("at-top");
  } else {
    document.body.setAttribute("at-top", "");
  }
};

window.addEventListener("scroll", updateScroll);
updateScroll();
