import { actions } from "./../actions";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("nida-intro")
export class NidaIntro extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: inherit;
      }
      .overlay {
        object-fit: cover;
        opacity: 0.1;
        pointer-events: none;
        position: absolute;
      }
      .container {
        max-width: 1200px;
        margin: auto;
        padding: 40px 0;
      }
    `;
  }

  constructor() {
    super();

    const isFinished = localStorage.getItem("into-finished");
    if (isFinished && isFinished === "true") {
      if (location.hash !== "#intro") {
        this.onEnded();
      }
    }
  }

  onEnded() {
    localStorage.setItem("into-finished", "true");
    actions.showPage();
    this.remove();
  }

  render() {
    return html`
      <img
        class="overlay"
        width="100%"
        height="100%"
        src="./images/noise.png"
      />
      <div class="container">
        <button @click="${this.onEnded}">Play</button>
      </div>
    `;
  }
}
