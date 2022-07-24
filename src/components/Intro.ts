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
        color: #333;
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
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translateX(-50%);
        color: inherit;
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
        color: inherit;
      }
      strong {
        font-weight: bold;
      }
    `;
  }

  constructor() {
    super();

    if (location.hash !== "#intro") {
      location.hash = "";
      localStorage.setItem("into-finished", "true");
      actions.showPage();
      this.remove();
    }
  }

  index = -1;

  headline?: string;

  connectedCallback(): void {
    super.connectedCallback();

    this.tabIndex = 0;

    window.addEventListener("keydown", this.onKeyDown.bind(this));

    // this.addEventListener("click", () => {
    //   this.next();
    // });

    this.next();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.removeEventListener("keydown", this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    if (e.code === "Space") {
      this.next();
    }
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
    location.hash = "";

    const video = document.createElement("video");
    video.src = "./nida-bday-king.mp4";
    video.muted = true;
    video.className = "intro-video";

    video.oncanplay = () => {
      document.body.append(video);
      video.play();
    };

    video.onanimationend = () => {
      video.remove();
    };

    setTimeout(() => {
      localStorage.setItem("into-finished", "true");
      actions.showPage();
      this.remove();
    }, 3000);
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
