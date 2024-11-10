/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, u as unescapeHTML, d as createAstro, e as renderSlot } from '../chunks/astro/server_DxtXFKMS.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CB0VrUnJ.mjs';
import { f as formatDateToThai } from '../chunks/formatDate_Bnx_81Vb.mjs';
/* empty css                                  */
import { GraphQLClient } from 'graphql-request';
import { $ as $$Layout } from '../chunks/Layout_D2bnZ7Db.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$News = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$News;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main> <article> <header class="py-3 text-center"> <h1 class="text-xl sm:text-2xl md:text-3xl font-medium text-white ">${post.title}</h1> <time${addAttribute(post.date, "datetime")}>${formatDateToThai(post.date)}</time> </header> <figure class="content-cover"> ${renderComponent($$result, "Image", $$Image, { "src": post.featuredImageFull.node.sourceUrl, "alt": post.featuredImageFull.node.altText, "width": "800", "height": "450", "sizes": "(max-width: 800px) 100vw, 800px", "loading": "lazy" })} </figure> <div class="entry-content">${unescapeHTML(post.content.replace('<a href="https://assets.onlygroub', '<a href="https://onlygroub'))}</div> <div class="breadcrumb"> <ol class="flex justify-center gap-2 line-clamp-1"> <li><a href="/">หน้าหลัก</a></li> <li><a${addAttribute(`/category/${post.terms.nodes[0].slug}`, "href")} rel="category tag">${post.terms.nodes[0].name}</a></li> <li><span>${post.title}</span></li> </ol> </div> </article> </main>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/templates/News.astro", void 0);

const $$Astro$3 = createAstro();
const $$Movie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Movie;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main> <article> <div class="movie-detail-container"> <div class="movie-detail"> <div class="movie-link-wrap"><a class="movie-link" href="/movie">ดูหนัง</a></div> <h1 class="movie-name">${post.title}</h1> <dl class="movie-info"> <dt>ผู้กำกับ</dt> <dd>${post.movie.director}</dd> <dt>นักแสดงนำ</dt> <dd>${post.movie.actors}</dd> <dt>วันที่ฉาย</dt> <dd>${formatDateToThai(post.movie.releaseDate)}</dd> </dl> </div> <div class="movie-poster"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg", "src": post.featuredImageMedium.node.sourceUrl, "alt": `\u0E14\u0E39\u0E2B\u0E19\u0E31\u0E07 ${post.title} \u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07`, "width": "800", "height": "450", "sizes": "(max-width: 800px) 100vw, 800px", "loading": "lazy" })} </div> ${post.movie.synopsis && renderTemplate`<div class="movie-synopsis"> <h2 class="title">เรื่องย่อ</h2> <div class="font-light">${unescapeHTML(post.movie.synopsis)}</div> </div>`} </div> <!-- <div class="ads">
        <div class="inner">
            <img src="https://placehold.co/300x250?text=ADS" alt="Hello World" />
        </div>
    </div> --> <div class="entry-content">${unescapeHTML(post.content.replace('<a href="https://assets.onlygroub', '<a href="https://onlygroub'))}</div> <!-- <div class="entry-content" set:html={post.content}></div> --> <div class="text-center">
แก้ไขเมื่อ <time${addAttribute(post.date, "datetime")}>${formatDateToThai(post.date)}</time> </div> <div class="breadcrumb"> <ol class="flex justify-center gap-2 line-clamp-1"> <li><a href="/">หน้าหลัก</a></li> <li><a${addAttribute(`/category/${post.terms.nodes[0].slug}`, "href")} rel="category tag">${post.terms.nodes[0].name}</a></li> <li><span>${post.title}</span></li> </ol> </div> </article> </main>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/templates/Movie.astro", void 0);

const ALL_POSTS_QUERY = `
    query LoadAllPosts($after: String) {
        posts(first: 100, after: $after) {
            nodes {
                title
                slug
                date
                modified
                excerpt
                movie {
                    director
                    actors
                    releaseDate
                    youtubeId
                    imdbId
                    synopsis
                }
                featuredImageThumbnail: featuredImage {
                    node {
                    id
                    sourceUrl(size: THUMBNAIL)
                    altText
                    srcSet(size: THUMBNAIL)
                    sizes(size: THUMBNAIL)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                featuredImageMedium: featuredImage {
                    node {
                    id
                    sourceUrl(size: MEDIUM)
                    altText
                    srcSet(size: MEDIUM)
                    sizes(size: MEDIUM)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                featuredImageFull: featuredImage {
                    node {
                    id
                    sourceUrl(size: _2048X2048)
                    altText
                    srcSet(size: _2048X2048)
                    sizes(size: _2048X2048)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                content(format: RENDERED)
                author {
                    node {
                        name
                    }
                }
                terms {
                    nodes {
                        name
                        slug
                    }
                }
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
                relatedPosts(where: { limit: 3 }) {
                    nodes {
                        title
                        slug
                        date
                        featuredImage {
                            node {
                                mediaItemUrl
                                sourceUrl(size: THUMBNAIL)
                                srcSet(size: THUMBNAIL)
                                sizes(size: THUMBNAIL)
                                altText
                            }
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
`;

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderSlot($$result, $$slots["default"])}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/templates/Content.astro", void 0);

const $$Astro$2 = createAstro();
const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { relatedPosts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="related-posts"> <h2 class="section-title">เรื่องที่คุณอาจสนใจ</h2> <div class="list-related"> ${// related posts
  relatedPosts.map((post) => {
    return renderTemplate`<a${addAttribute(`/${post.slug}`, "href")}> <div class="trailer-thumbnail"> ${renderComponent($$result, "Image", $$Image, { "srcset": post.featuredImage.node.srcSet, "sizes": post.featuredImage.node.srcSet, "src": post.featuredImage.node.sourceUrl, "alt": post.featuredImage.node.altText, "width": "320", "height": "180", "loading": "lazy" })} </div> <div class="trailer-content"> <p class="title">${post.title}</p> <time${addAttribute(post.date, "datetime")} class="text-sm"> ${formatDateToThai(post.date)} </time> </div> </a>`;
  })} </div> </section>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/RelatedPosts.astro", void 0);

const $$Astro$1 = createAstro();
const $$NextPrevPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NextPrevPost;
  const { next, prev } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between gap-10 mt-10 pt-5 border-t border-neutral-600"> <div class="flex-1"> ${prev && renderTemplate`<a${addAttribute(`/${prev.slug}`, "href")}> <div class="trailer-thumbnail"> ${renderComponent($$result, "Image", $$Image, { "srcset": prev.featuredImageThumbnail.node.srcSet, "sizes": prev.featuredImageThumbnail.node.srcSet, "src": prev.featuredImageThumbnail.node.sourceUrl, "alt": prev.featuredImageThumbnail.node.altText, "width": "320", "height": "180", "loading": "lazy" })} </div> <div class="trailer-content"> <p class="title">${prev.title}</p> <time${addAttribute(prev.date, "datetime")} class="text-sm"> ${formatDateToThai(prev.date)} </time> </div> </a>
                <div class="flex flex-wrap"> <div class="w-full"></div> </div>`} </div> <div class="flex-1"> ${next && renderTemplate`<a${addAttribute(`/${next.slug}`, "href")}> <div class="trailer-thumbnail"> ${renderComponent($$result, "Image", $$Image, { "srcset": next.featuredImageThumbnail.node.srcSet, "sizes": next.featuredImageThumbnail.node.srcSet, "src": next.featuredImageThumbnail.node.sourceUrl, "alt": next.featuredImageThumbnail.node.altText, "width": "320", "height": "180", "loading": "lazy" })} </div> <div class="trailer-content"> <p class="title">${next.title}</p> <time${addAttribute(next.date, "datetime")} class="text-sm"> ${formatDateToThai(next.date)} </time> </div> </a>
                <div class="flex flex-wrap"> <div class="w-full"></div> </div>`} </div> </div>`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/components/NextPrevPost.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  let allPosts = [];
  let hasNextPage = true;
  let afterCursor = null;
  while (hasNextPage) {
    const client = new GraphQLClient("https://assets.onlygroub.com/graphql");
    const data = await client.request(ALL_POSTS_QUERY, { after: afterCursor });
    allPosts = allPosts.concat(data.posts.nodes);
    hasNextPage = data.posts.pageInfo.hasNextPage;
    afterCursor = data.posts.pageInfo.endCursor;
  }
  return allPosts.map((post) => {
    const index = allPosts.indexOf(post);
    const prev = allPosts[index - 1];
    const next = allPosts[index + 1];
    return {
      params: { slug: post.slug },
      props: { post, prev, next }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post, prev, next } = Astro2.props;
  const relatedPosts = post?.relatedPosts.nodes;
  Astro2.response.headers.set("cache-control", "public, max-age=0, must-revalidate");
  Astro2.response.headers.set("netlify-cdn-cache-control", "s-maxage=31536000");
  const isMovie = ["thai", "inter"].includes(post.terms.nodes[0]?.slug);
  const structuredData = `
{
    "@context": "https://schema.org/",
    "@type": "NewsArticle",
    "headline": "${post.title}",
    "image": {
        "@type": "ImageObject",
        "url": "${post.featuredImageFull.node.sourceUrl}",
        "width": "${post.featuredImageFull.node.mediaDetails.width}",
        "height": "${post.featuredImageFull.node.mediaDetails.height}"
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
    "datePublished": "${post.date}+07:00",
    "dateModified": "${post.modified}+07:00"
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "seo": post.seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate`${isMovie && renderTemplate`${renderComponent($$result3, "Movie", $$Movie, { "post": post })}`}${!isMovie && renderTemplate`${renderComponent($$result3, "News", $$News, { "post": post })}`}${renderComponent($$result3, "RelatedPosts", $$RelatedPosts, { "relatedPosts": relatedPosts })} ${renderComponent($$result3, "NextPrevPost", $$NextPrevPost, { "next": next, "prev": prev })} ` })} ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/[slug].astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
