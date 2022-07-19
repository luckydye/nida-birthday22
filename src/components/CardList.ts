import { ImageShow } from "./ImageShow";
import { render, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "@atrium-ui/lazyimage";

@customElement("nida-cardlist")
export class CardList extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  cards = [];

  init = false;

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("cards", ((ev: CustomEvent) => {
      this.cards = ev.detail;
    }) as EventListener);

    const page = document.querySelector(".page");

    if (page) {
      page.addEventListener("scroll", () => {
        if (!this.init && this.cards.length > 0) {
          this.init = true;
          this.requestUpdate();
        }
      });
    } else {
      throw new Error("Something went wrong");
    }
  }

  renderMedia(media) {
    switch (media.type) {
      // case "image/jpeg":
      //   return html`
      //     <aui-lazyimage width="100%" src="${media.src}"></aui-lazyimage>
      //   `;
      // case "image/png":
      //   return html`
      //     <aui-lazyimage width="100%" src="${media.src}"></aui-lazyimage>
      //   `;
      default:
        if (media.embed) {
          return html`<iframe
            src="${media.embed}"
            width="100%"
            height="280px"
            style="border: none;"
            allow="autoplay"
          ></iframe>`;
        } else {
          return html`Media not suppoerted. ${media.type}`;
        }
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
    if (!this.init) return;

    const columns: [][] = [];

    let i = 0;
    for (let card of this.cards) {
      const column = i % 3;
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
