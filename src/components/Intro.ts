import { actions } from "./../actions";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { messages } from "../introMessages";

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
        filter: contrast(1.1);
      }
      .overlay {
        object-fit: cover;
        opacity: 0.1;
        pointer-events: none;
        position: absolute;
        z-index: 1000;
      }
      .container {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
        padding: 40px;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 20%;
        transform: translateX(-50%);
        color: #333;
        animation: attention 3s ease infinite both;
      }
      @keyframes attention {
        0% {
          opacity: 1;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .title {
        font-size: 48px;
        font-weight: bold;
        color: #333;
      }
      strong {
        font-weight: bold;
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

  index = -1;

  headline?: string;

  connectedCallback(): void {
    super.connectedCallback();

    this.tabIndex = 0;

    this.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.next();
      }
    });

    this.addEventListener("click", () => {
      this.next();
    });

    this.next();
  }

  next() {
    this.index++;

    if (this.index > messages.length - 1) {
      this.onEnded();
    } else {
      this.headline = messages[this.index];
      this.requestUpdate();
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
        <types-text class="title">${this.headline}</types-text>
      </div>

      <div class="info-message">Press <strong>Space</strong> to continue.</div>
    `;
  }
}
