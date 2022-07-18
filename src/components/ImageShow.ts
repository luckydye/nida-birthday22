import { css, html, LitElement, PropertyValueMap } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("image-show")
export class ImageShow extends LitElement {
  static get styles() {
    return css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: black;
      }
      .content {
        height: auto;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        max-width: 900px;
        margin: auto;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
  }

  original: HTMLElement;

  position: DOMRect | null;

  constructor(ele: HTMLElement) {
    super();

    this.original = ele;
    this.position = null;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.position = this.original.getBoundingClientRect();

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  protected updated(): void {
    const content: HTMLElement | null | undefined =
      this.shadowRoot?.querySelector(".content");

    if (!content || !this.position) return;

    content.style.width = this.position.width + "px";
    content.style.height = this.position.height + "px";
    content.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;

    content.offsetHeight;

    if (this.original) {
      this.original.style.opacity = "0";
      this.original.style.transition = "opacity .125s ease";
    }

    content.style.transform = `translate(0, 0)`;
    content.style.width = "900px";
    content.style.height = "auto";
  }

  close() {
    this.remove();

    if (this.original) {
      this.original.style.opacity = "";
    }
  }

  render() {
    return html`
      <div
        class="blackbox"
        @click="${(e) => {
          if (e.target.className === "blackbox") {
            this.close();
          }
        }}"
      >
        <div class="close-btn" @click="${(e) => this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
