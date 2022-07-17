import { messageTemplates } from "./../randomMessages";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

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
        margin-top: 8px;
        animation: slide-up 0.2s ease-out;
      }
      @keyframes slide-up {
        from {
          transform: translate(0, 20px);
        }
      }
      .messages {
        overflow: hidden;
      }
      img {
        width: 32px;
      }
    `;
  }

  messages = [];

  connectedCallback() {
    super.connectedCallback();

    const tick = () => {
      const templates = messageTemplates;

      const nextMessage =
        templates[Math.floor(templates.length * Math.random())];
      const msgs = this.shadowRoot?.querySelector(".messages");
      const msg = document.createElement("nida-message");
      msg.className = "message";
      msg.innerHTML = nextMessage;

      this.messages.push(msg);

      if (this.messages.length > 5) {
        this.messages.shift();
      }

      this.requestUpdate();

      setTimeout(() => tick(), 1000 * Math.random() + 1000 * 2);
    };
    tick();
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `;
  }
}
