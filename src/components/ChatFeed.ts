import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

const messageTemplates = () => {
  return [
    `<img src="./images/hype.png"><img src="./images/hype.png"><img src="./images/hype.png"><img src="./images/hype.png">`,
    `Random message with letters`,
    `Another message`,
    `<img src="./images/hype.png"><img src="./images/hype.png">`,
    `<img src="./images/hype.png"><img src="./images/hype.png"><img src="./images/hype.png"><img src="./images/hype.png"><img src="./images/hype.png">`,
  ];
};

@customElement("nida-chat")
export class ChatFeed extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: absolute;
        bottom: 120px;
        margin: 10px;
        color: white;
      }
      .message {
        margin-top: 3px;
        animation: slide-up 0.2s ease-out;
      }
      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translate(0, 10px);
        }
      }
      img {
        width: 32px;
      }
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    const tick = () => {
      const templates = messageTemplates();

      const nextMessage =
        templates[Math.floor(templates.length * Math.random())];
      const msgs = this.shadowRoot?.querySelector(".messages");
      const msg = document.createElement("div");
      msg.className = "message";
      msg.innerHTML = nextMessage;
      msgs?.append(msg);

      if (msgs?.children.length > 5) {
        msgs?.children[0].remove();
      }

      setTimeout(() => tick(), 1000 * Math.random() + 1000 * 2);
    };
    tick();
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="messages"></div>
      </div>
    `;
  }
}
