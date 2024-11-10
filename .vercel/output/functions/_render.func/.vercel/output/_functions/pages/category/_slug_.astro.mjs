/* empty css                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_DxtXFKMS.mjs';
import { GraphQLClient } from 'graphql-request';
import { $ as $$Layout } from '../../chunks/Layout_D2bnZ7Db.mjs';
import { $ as $$Card } from '../../chunks/Card_UY_HagSj.mjs';
import { f as formatDateToThai } from '../../chunks/formatDate_Bnx_81Vb.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const category_Query = `
        query GetCategories {
			categories {
				nodes {
				slug
				}
			}
		}
    `;
  const dataCategory = await client.request(category_Query);
  return dataCategory.categories.nodes.map((category) => ({
    params: { slug: category.slug }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const post_query = `
			query GetCategory {
				categories(where: {slug: "${slug}"}) {
					nodes {
						name
						slug
						seo {
							title
							metaDesc
							opengraphDescription
							opengraphTitle
							opengraphImage {
								altText
								sourceUrl
								srcSet
							}
							opengraphUrl
							opengraphSiteName
							opengraphPublishedTime
							opengraphModifiedTime
							twitterTitle
							twitterDescription
							twitterImage {
								altText
								sourceUrl
								srcSet
							}
						}
						posts(first: 24) {
							nodes {
								title
								slug
								date
								excerpt
								featuredImageThumbnail: featuredImage {
									node {
									id
									sourceUrl(size: THUMBNAIL)
									altText
									srcSet(size: THUMBNAIL)
									sizes(size: THUMBNAIL)
									}
								}
								featuredImagePoster: featuredImage {
									node {
									id
									sourceUrl(size: MEDIUM)
									altText
									srcSet(size: MEDIUM)
									sizes(size: MEDIUM)
									}
								}
								featuredImageFull: featuredImage {
									node {
									id
									sourceUrl(size: _2048X2048)
									altText
									srcSet(size: _2048X2048)
									sizes(size: _2048X2048)
									}
								}
							}
						}
					}
				}
			}
`;
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const data = await client.request(post_query);
  const seo = data.categories.nodes[0].seo;
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
	"name": "${data.categories.nodes[0].title}",
	}]
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "seo": seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="header-section"> <h1 class="section-title">${data.categories.nodes[0].name}</h1> </div> <div class="list-posts"> ${data.categories.nodes[0].posts.nodes.map((post) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "sizes": post.featuredImageThumbnail.node.srcSet, "title": post.title, "data": post.date, "dateFormatted": formatDateToThai(post.date), "imageUrl": post.featuredImageThumbnail.node.sourceUrl, "imageAlt": post.featuredImageThumbnail.node.altText, "url": post.slug, "excerpt": post.excerpt })}`;
  })} </div> <!-- เพิ่ม pagination สำหรับหน้าแรก --> ${data.categories.nodes[0].posts.nodes.length == 24 && renderTemplate`<div class="flex justify-center gap-4 my-8"> <span class="px-4 py-2">
หน้า 1
</span> <a${addAttribute(`/category/${slug}/2`, "href")} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-black">
หน้าต่อไป →
</a> </div>`} </div> ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/category/[slug]/index.astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/category/[slug]/index.astro";
const $$url = "/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
