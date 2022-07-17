import { cards } from "../dist/cards.json";

export const actions = {
  showPage() {
    const page = document.querySelector(".page");
    if (page) {
      page.removeAttribute("loading");
      window.dispatchEvent(new CustomEvent("cards", { detail: cards }));
    }
  },
};
