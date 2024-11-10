/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_DxtXFKMS.mjs';
import { $ as $$Layout } from '../chunks/Layout_D2bnZ7Db.mjs';
import { f as formatDateToThai } from '../chunks/formatDate_Bnx_81Vb.mjs';
import { $ as $$CardMovie } from '../chunks/CardMovie_CkXdkj9V.mjs';
import { GraphQLClient } from 'graphql-request';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$AllMovies = createComponent(async ($$result, $$props, $$slots) => {
  const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
  const query = `
        query LoadAllPostsExcerpts {
			posts (first:200 where: {categoryIn : ["281","282"]}) {
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
  return renderTemplate`${maybeRenderHead()}<div class="list-cards"> ${posts.map((post) => {
    return renderTemplate`${renderComponent($$result, "CardMovie", $$CardMovie, { "srcset": post.featuredImageThumbnail.node.srcSet, "sizes": post.featuredImageThumbnail.node.srcSet, "title": post.title, "excerpt": post.excerpt, "data": post.date, "dateFormatted": formatDateToThai(post.date), "imageUrl": post.featuredImageThumbnail.node.sourceUrl, "imageAlt": post.featuredImageThumbnail.node.altText, "url": post.slug })}`;
  })} </div>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/AllMovies.astro", void 0);

const $$Movie = createComponent(async ($$result, $$props, $$slots) => {
  const page_id = "3100";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.page.seo.title, "seo": data.page.seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="py-10 space-y-4 max-w-screen-md mx-auto"> <h1 class="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center">ดูหนัง</h1> <p class="text-center"> <strong>Onlygroub</strong> เว็บไซต์ที่รวบรวมข้อมูลภาพยนตร์คุณภาพทั้งไทยและต่างประเทศ พร้อมอัพเดทข้อมูลใหม่ล่าสุดทุกวัน ที่นี่คุณจะได้เพลิดเพลินไปกับคลังข้อมูลภาพยนตร์ที่ครบครัน ทั้งข่าวสารวงการหนัง บทวิจารณ์เชิงลึก และรีวิวคุณภาพจากทีมงานมืออาชีพที่พร้อมแนะนำหนังดีๆ ให้คุณได้เลือกชม เราคัดสรรทุกข้อมูลมาเพื่อให้คุณได้เข้าถึงและเข้าใจภาพยนตร์แต่ละเรื่องได้อย่างลึกซึ้ง ไม่พลาดทุกรายละเอียดสำคัญที่จะทำให้ประสบการณ์การ<strong>ดูหนัง</strong>ของคุณสมบูรณ์แบบยิ่งขึ้น
</p> </div> <div class="movie-categories"> <a href="/category/thai" class="btn-categories-item">
หนังไทย
</a> <a href="/category/inter" class="btn-categories-item">
ต่างประเทศ
</a> </div> ${renderComponent($$result2, "AllMovies", $$AllMovies, {})} </main> ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/movie.astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/movie.astro";
const $$url = "/movie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Movie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
