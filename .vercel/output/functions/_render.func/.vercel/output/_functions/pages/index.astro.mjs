/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute, u as unescapeHTML, d as createAstro } from '../chunks/astro/server_DxtXFKMS.mjs';
import { $ as $$Layout } from '../chunks/Layout_D2bnZ7Db.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CB0VrUnJ.mjs';
import { f as formatDateToThai } from '../chunks/formatDate_Bnx_81Vb.mjs';
import { GraphQLClient } from 'graphql-request';
import { $ as $$CardMovie } from '../chunks/CardMovie_CkXdkj9V.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$PostsHomeNews = createComponent(async ($$result, $$props, $$slots) => {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query LoadAllPostsExcerpts {
			posts (first:10 where: {categoryIn : ["280","2"]}) {
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
`;
  const data = await client.request(query, { first: 10 });
  const posts = data.posts.nodes;
  return renderTemplate`${maybeRenderHead()}<section class="mt-12"> <div class="section-header"> <h2 class="title">ข่าวภาพยนตร์</h2> <a href="/category/news">ดูทั้งหมด</a> </div> <div class="flex flex-wrap gap-5 md:gap-10 mb-5"> <div class="w-full md:w-auto md:flex-1"> <article class=""> <div> ${renderComponent($$result, "Image", $$Image, { "class": "aspect-[16/9] rounded-lg object-cover", "srcset": posts[0].featuredImageFull.node.srcSet, "sizes": posts[0].featuredImageFull.node.srcSet, "src": posts[0].featuredImageFull.node.sourceUrl, "alt": posts[0].featuredImageFull.node.altText, "width": "800", "height": "450", "loading": "eager" })} </div> <div class="p-5"> <h2 class="text-white font-semibold text-lg md:text-xl md:leading-tight line-clamp-2 mb-2"><a${addAttribute(`/${posts[0].slug}`, "href")}>${posts[0].title}</a></h2> <time${addAttribute(posts[0].date, "datetime")} class="text-sm block mb-2"> ${formatDateToThai(posts[0].date)} </time> <div class="text-sm text-neutral-300 line-clamp-2">${unescapeHTML(posts[0].excerpt)}</div> </div> </article> </div> <div class="w-full md:w-auto md:flex-1"> <div class="home-list-contents-hero"> ${posts.slice(1, 4).map((post) => {
    return renderTemplate`<article> <div class="flex gap-5 items-center"> <div class="w-2/5 basis-2/5 md:order-2"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg hover:opacity-80 transition-all", "srcset": post.featuredImageThumbnail.node.srcSet, "sizes": post.featuredImageThumbnail.node.srcSet, "src": post.featuredImageThumbnail.node.sourceUrl, "alt": post.featuredImageThumbnail.node.altText, "width": "320", "height": "180", "loading": "eager" })} </div> <div class="flex-1 w-auto space-y-2"> <h3 class="text-base font-normal text-white leading-snug line-clamp-2 mb-2"><a class="text-white hover:text-primary transition-all"${addAttribute(`/${post.slug}`, "href")}>${post.title}</a></h3> <time${addAttribute(post.date, "datetime")} class="text-sm"> ${formatDateToThai(post.date)} </time> </div> </div> </article>`;
  })} </div> </div> </div> </section>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/PostsHomeNews.astro", void 0);

const $$PostsHomeMovie = createComponent(async ($$result, $$props, $$slots) => {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query LoadAllPostsExcerpts {
			posts (first:10 where: {categoryIn : ["281","282"]}) {
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
`;
  const data = await client.request(query, { first: 10 });
  const posts = data.posts.nodes;
  return renderTemplate`${maybeRenderHead()}<section> <div class="section-header"> <h2 class="title">ดูหนังใหม่</h2> <a href="/movie">ดูทั้งหมด</a> </div> <div class="list-cards"> ${posts.map((post) => {
    return renderTemplate`${renderComponent($$result, "CardMovie", $$CardMovie, { "srcset": post.featuredImageThumbnail.node.srcSet, "sizes": post.featuredImageThumbnail.node.srcSet, "title": post.title, "excerpt": post.excerpt, "data": post.date, "dateFormatted": formatDateToThai(post.date), "imageUrl": post.featuredImageThumbnail.node.sourceUrl, "imageAlt": post.featuredImageThumbnail.node.altText, "url": post.slug })}`;
  })} </div> </section>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/PostsHomeMovie.astro", void 0);

const $$PostsHomeTrailer = createComponent(async ($$result, $$props, $$slots) => {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query LoadAllPostsExcerpts {
			posts (first:3 where: {categoryIn : ["3"]}) {
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
`;
  const data = await client.request(query, { first: 10 });
  const posts = data.posts.nodes;
  return renderTemplate`${maybeRenderHead()}<section> <div class="section-header"> <h2 class="title">ตัวอย่างหนัง</h2> <a href="/category/trailer">ดูทั้งหมด</a> </div> <div class="list-trailers"> ${posts.map((post) => {
    return renderTemplate`<article> <div class="trailer-thumbnail"> <a${addAttribute(`/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "srcset": post.featuredImageThumbnail.node.srcSet, "sizes": post.featuredImageThumbnail.node.srcSet, "src": post.featuredImageThumbnail.node.sourceUrl, "alt": post.featuredImageThumbnail.node.altText, "width": "320", "height": "180", "loading": "eager" })} </a> </div> <div class="trailer-content"> <h3 class="title"><a${addAttribute(`/${post.slug}`, "href")}>${post.title}</a></h3> <time${addAttribute(post.date, "datetime")} class="text-sm"> ${formatDateToThai(post.date)} </time> </div> </article>`;
  })} </div> </section>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/PostsHomeTrailer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const page_id = "3118";
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query GetPageById($id: ID!) {
            page(id: $id, idType: DATABASE_ID) {
                id
                title
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
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": "${data.title}",
    "image": {
        "@type": "ImageObject",
        "url": "${Astro2.url.origin}/cover.webp",
        "width": "750",
        "height": "393"
    },
    "author": {
        "@type": "Person",
        "name": "ONLYGROUB",
        "url": "https://onlygroub.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "ONLYGROUB",
        "logo": {
        "@type": "ImageObject",
        "url": "https://onlygroub.com/logo.png",
        "width": "342",
        "height": "106"
        }
    },
    "datePublished": "${data.date}+07:00",
    "dateModified": "${data.modified}+07:00"
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.page.seo.title, "seo": data.page.seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PostsHomeNews", $$PostsHomeNews, {})} <hr class="hr"> ${renderComponent($$result2, "PostsHomeMovie", $$PostsHomeMovie, {})} <hr class="hr"> ${renderComponent($$result2, "PostsHomeTrailer", $$PostsHomeTrailer, {})} </main> ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/index.astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
