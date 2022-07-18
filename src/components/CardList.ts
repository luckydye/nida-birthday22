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
    // <iframe src="https://drive.google.com/file/d/1T9wR-W2r6-NXxkx9IC8EJSn_KRH6l91d/preview" width="640" height="480" allow="autoplay"></iframe>

    return html`<iframe
      src="${media.embed}"
      width="100%"
      height="280px"
      style="border: none;"
      allow="autoplay"
    ></iframe>`;

    switch (media.type) {
      case "image/jpeg":
        return html`
          <aui-lazyimage width="100%" src="${media.src}"></aui-lazyimage>
        `;
      case "image/png":
        return html`
          <aui-lazyimage width="100%" src="${media.src}"></aui-lazyimage>
        `;
      case "video/webm":
        return html`<video width="100%" controls src="${media.src}"></video>`;
      case "video/mp4":
        return html`<video width="100%" controls src="${media.src}"></video>`;
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
