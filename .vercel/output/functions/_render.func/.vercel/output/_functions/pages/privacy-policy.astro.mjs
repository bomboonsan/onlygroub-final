/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DxtXFKMS.mjs';
import { $ as $$Layout } from '../chunks/Layout_D2bnZ7Db.mjs';
import { $ as $$Page } from '../chunks/Page_BVz5pLUZ.mjs';
import { GraphQLClient } from 'graphql-request';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const page_id = "66";
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query GetPageById($id: ID!) {
            page(id: $id, idType: DATABASE_ID) {
                id
                title
                content
                slug
                date
                seo {
                    title
                    metaDesc
                }
            }
        }
`;
  const variables = { id: page_id };
  const data = await client.request(query, variables);
  const structuredData = `
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [{
	"@type": "ListItem",
	"position": 1,
	"name": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01",
	"item": "https://onlygroub.com"
	},{
	"@type": "ListItem",
	"position": 2,
	"name": "${data.page.seo.title}",
	}]
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.page.seo.title, "seo": data.page.seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Page", $$Page, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="page"> <h1 class="page-title">${data.page.title}</h1> <div class="page-content">${unescapeHTML(data.page.content)}</div> </div> ` })} ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/privacy-policy.astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivacyPolicy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
