import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@atrium-ui/lazyimage";

@customElement("nida-cardlist")
export class CardList extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
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

  renderMedia(media) {
    switch (media.type) {
      case "image/jpeg":
        return html`
          <aui-lazyimage width="200px" src="${media.src}"></aui-lazyimage>
        `;
      case "image/png":
        return html`
          <aui-lazyimage width="200px" src="${media.src}"></aui-lazyimage>
        `;
    }
  }

  render() {
    return html`
      <div class="grid">
        ${this.cards.map((card) => {
          return html`
            <nida-card>
              <div class="message">
                <p>${card.message}</p>
              </div>

              ${card.media
                ? html`
                    <div class="media">${this.renderMedia(card.media)}</div>
                  `
                : ""}

              <div class="name">
                <span>${card.name}</span>
              </div>
            </nida-card>
          `;
        })}
      </div>
    `;
  }
}
