import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("scroll-indicator")
export class ScollIndicator extends LitElement {
  static get styles() {
    return css`
      :host {
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        pointer-events: none;
        transition: opacity 0.33s ease;
        z-index: 0;
        opacity: 0;

        animation: bounce 2s ease infinite both;
        animation-delay: 3s;
      }
      :host([shown]) {
        opacity: 1;
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-20px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();

    const page = document.querySelector(".page");

    if (page) {
      const updateScroll = () => {
        const v = Math.floor(page.scrollTop / 20);
        if (v > 0) {
          this.removeAttribute("shown");
        } else {
          this.setAttribute("shown", "");
        }
      };

      page.addEventListener("scroll", updateScroll);
      updateScroll();
    } else {
      throw new Error("Something went wrong");
    }
  }

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="85.965"
        height="51.382"
        viewBox="0 0 85.965 51.382"
        class="scroll-indicator"
      >
        <defs>
          <filter
            id="Path_1"
            x="0"
            y="0"
            width="85.965"
            height="51.382"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="2" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
          <path
            id="Path_1-2"
            data-name="Path 1"
            d="M2931.512,1003.219l26.781,20.181,26.781-20.181"
            transform="translate(-2915.31 -989.02)"
            fill="none"
            stroke="#615051"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          />
        </g>
      </svg>
    `;
  }
}
