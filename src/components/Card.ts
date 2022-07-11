import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("nida-card")
export class Card extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        padding: 20px;
        border-radius: 6px;
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
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}
