import "./components/Card";
import "./components/CardList";

import { cards } from "../dist/cards.json";

window.dispatchEvent(new CustomEvent("cards", { detail: cards }));
