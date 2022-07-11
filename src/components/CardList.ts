import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@atrium-ui/lazyimage";

@customElement("nida-cardlist")
export class CardList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 1.5rem;
      }
      .grid {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
      }
    `;
  }

  cards = [];

  constructor() {
    super();

    window.addEventListener("cards", ((ev: CustomEvent) => {
      this.cards = ev.detail;
    }) as EventListener);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="grid">
        ${this.cards.map((card) => {
          return html`
            <nida-card>
              <div>
                <p>${card.message}</p>
              </div>

              ${card.media
                ? html`
                    <div>
                      <aui-lazyimage
                        width="200px"
                        src="${card.media}"
                      ></aui-lazyimage>
                    </div>
                  `
                : ""}

              <span>${card.name}</span>
            </nida-card>
          `;
        })}
      </div>
    `;
  }
}
