/* empty css                                        */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../chunks/astro/server_DxtXFKMS.mjs';
import { GraphQLClient } from 'graphql-request';
import { $ as $$Layout } from '../../../chunks/Layout_D2bnZ7Db.mjs';
import { $ as $$Card } from '../../../chunks/Card_UY_HagSj.mjs';
import { f as formatDateToThai } from '../../../chunks/formatDate_Bnx_81Vb.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const POSTS_PER_PAGE = 24;
  const category_Query = `
            query GetCategoriesWithCount {
                categories {
                    nodes {
                        slug
                        count
                    }
                }
            }
    `;
  const dataCategory = await client.request(category_Query);
  const paths = [];
  dataCategory.categories.nodes.forEach((category) => {
    const totalPages = Math.ceil(category.count / POSTS_PER_PAGE);
    for (let page = 1; page <= totalPages; page++) {
      if (page != 1) {
        paths.push({
          params: { slug: category.slug, page: String(page) }
        });
      }
    }
  });
  return paths;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { slug, page } = Astro2.params;
  const postPerPage = 24;
  let data_allpages = [];
  let hasNextPage = true;
  let endCursor = null;
  let endCursor_allpages = [];
  let i = 1;
  const maxLoop = 50;
  while (hasNextPage && i <= maxLoop) {
    i++;
    const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
    const posts_Query = `
            query GetCategory {
                categories(where: {slug: "${slug}"}) {
                    nodes {
                        name
                        slug
                        seo {
                            title
                            metaDesc
                        }
                        posts(first: ${postPerPage} , after: "${endCursor}") {
                            pageInfo {
                                hasNextPage
                                endCursor
                            }
                            nodes {
                                title
                                slug
                                date
                                excerpt
                                featuredImageThumbnail: featuredImage {
                                    node {
                                        id
                                        sourceUrl(size: MEDIUM)
                                        altText
                                        srcSet(size: MEDIUM)
                                        sizes(size: MEDIUM)
                                    }
                                }
                            }
                        }
                    }
                }
            }
    `;
    const data = await client.request(posts_Query);
    hasNextPage = data.categories.nodes[0].posts.pageInfo.hasNextPage;
    data_allpages = data_allpages.concat(data);
    endCursor = data.categories.nodes[0].posts.pageInfo.endCursor;
    endCursor_allpages = endCursor_allpages.concat(data.categories.nodes[0].posts.pageInfo.endCursor);
  }
  const indexData = parseInt(page) - 1;
  const categoryTitle = data_allpages[0].categories.nodes[0].name;
  const posts = data_allpages[indexData].categories.nodes[0].posts.nodes;
  const seo = data_allpages[indexData].categories.nodes[0].seo;
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
	"name": "${categoryTitle}",
	}]
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": categoryTitle, "seo": seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="header-section"> <h1 class="section-title">${categoryTitle}</h1> </div> <div class="list-posts"> ${posts.map((post) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "sizes": post.featuredImageThumbnail.node.srcSet, "title": post.title, "data": post.date, "dateFormatted": formatDateToThai(post.date), "imageUrl": post.featuredImageThumbnail.node.sourceUrl, "imageAlt": post.featuredImageThumbnail.node.altText, "url": post.slug, "excerpt": post.excerpt })}`;
  })} </div> <div class="flex justify-between gap-4 my-8"> ${page > 2 && // page คือหน้าปัจจุบัน & i - 1 คือจำนวนหน้าแยกของหมวดหมู่
  renderTemplate`<a${addAttribute(`/category/${slug}/${Number(page) - 1}`, "href")} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-black">
← หน้าก่อนหน้า
</a>`} ${page == 2 && // page คือหน้าปัจจุบัน & i - 1 คือจำนวนหน้าแยกของหมวดหมู่
  renderTemplate`<a${addAttribute(`/category/${slug}`, "href")} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-black">
← หน้าก่อนหน้า
</a>`} <span class="px-4 py-2">
หน้า ${page} </span> ${page < i - 1 && // page คือหน้าปัจจุบัน & i - 1 คือจำนวนหน้าแยกของหมวดหมู่
  renderTemplate`<a${addAttribute(`/category/${slug}/${Number(page) + 1}`, "href")} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-black">
หน้าต่อไป →
</a>`} </div> </div> ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/category/[slug]/[page].astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/category/[slug]/[page].astro";
const $$url = "/category/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
