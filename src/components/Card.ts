import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("nida-card")
export class Card extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        transform-origin: 50% 20px;
        transform: rotate(var(--rot, 2deg));
      }
      .wrapper {
        padding: 20px;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
        background: white;
      }
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty("--rot", `${(Math.random() - 0.5) * 2}deg`);
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}
