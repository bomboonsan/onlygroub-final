import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_lR7PxkWc.mjs';
import { manifest } from './manifest_B5d4yxyo.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/category/_slug_/_page_.astro.mjs');
const _page3 = () => import('./pages/category/_slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/movie.astro.mjs');
const _page6 = () => import('./pages/privacy-policy.astro.mjs');
const _page7 = () => import('./pages/_slug_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.10_rollup@4.24.4_sass@1.80.6_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/category/[slug]/[page].astro", _page2],
    ["src/pages/category/[slug]/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/movie.astro", _page5],
    ["src/pages/privacy-policy.astro", _page6],
    ["src/pages/[slug].astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b3e03c43-6cef-4f92-93a4-5b30d8b7eda7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
