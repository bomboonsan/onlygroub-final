import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, u as unescapeHTML, d as createAstro } from './astro/server_DxtXFKMS.mjs';
import { $ as $$Image } from './_astro_assets_CB0VrUnJ.mjs';

const $$Astro = createAstro();
const $$CardMovie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardMovie;
  const { title, excerpt, date, dateFormatted, imageUrl, imageAlt, url, sizes, srcset } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card"> <div class="card-thumbnail"> <a${addAttribute(`/${url}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "srcset": srcset, "sizes": sizes, "src": imageUrl, "alt": imageAlt, "width": "210", "height": "300", "loading": "eager" })} </a> </div> <div class="card-content"> <h3 class="card-title"><a${addAttribute(`/${url}`, "href")}>${title}</a></h3> <time${addAttribute(date, "datetime")} class="entry-date">${dateFormatted}</time> <div class="entry-excerpt">${unescapeHTML(excerpt)}</div> </div> </article>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/CardMovie.astro", void 0);

export { $$CardMovie as $ };
