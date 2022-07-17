import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@atrium-ui/lazyimage";

@customElement("nida-cardlist")
export class CardList extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  cards = [];

  init = false;

  constructor() {
    super();

    window.addEventListener("cards", ((ev: CustomEvent) => {
      this.cards = ev.detail;
    }) as EventListener);

    window.addEventListener("scroll", () => {
      if (!this.init && this.cards.length > 0) {
        this.init = true;
        this.requestUpdate();
      }
    });
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

  renderCard(card) {
    return html`
      <nida-card>
        <div class="message">
          <nida-message>${card.message}</nida-message>
        </div>

        ${card.media
          ? html` <div class="media">${this.renderMedia(card.media)}</div> `
          : ""}

        <div class="name">
          <span>${card.name}</span>
        </div>
      </nida-card>
    `;
  }

  render() {
    const columns: [][] = [];

    let i = 0;
    for (let card of this.cards) {
      const column = Math.floor(i / 4);
      columns[column] = columns[column] || [];
      columns[column].push(card);
      i++;
    }

    return html`
      <div class="grid">
        ${columns.map((col) => {
          return html`
            <div class="column">
              ${col.map((card) => this.renderCard(card))}
            </div>
          `;
        })}
      </div>
    `;
  }
}
