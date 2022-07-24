import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

let callback = (entries, observer) => {
  let i = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.show();
      }, i * 100);
      i++;
    }
  });
};

const observer = new IntersectionObserver(callback, {
  rootMargin: "-100px",
});

@customElement("nida-card")
export class Card extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        background: white;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 2deg)) translate(0, 0px);
      }
      :host(:hover) {
        transform: rotate(var(--rot, 2deg)) translate(0, 0px) scale(1.0069);
        box-shadow: #00000010 2px 4px 24px;
      }
      .wrapper {
        padding: 30px 20px;
      }
    `;
  }

  show() {
    this.setAttribute("shown", "");
  }

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty("--rot", `${(Math.random() - 0.5) * 4}deg`);

    observer.observe(this);
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
}
