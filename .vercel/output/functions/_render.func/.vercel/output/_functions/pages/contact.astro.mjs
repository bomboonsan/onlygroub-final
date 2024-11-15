/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DxtXFKMS.mjs';
import { $ as $$Layout } from '../chunks/Layout_D2bnZ7Db.mjs';
import { $ as $$Page } from '../chunks/Page_BVz5pLUZ.mjs';
import { GraphQLClient } from 'graphql-request';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const page_id = "300";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.page.seo.title, "seo": data.page.seo, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Page", $$Page, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="my-10"> <!-- Title --> <div class="max-w-3xl mb-10 lg:mb-14"> <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">${data.page.title}</h2> <p class="mt-1 text-neutral-400">ขอบคุณที่ติดต่อมาที่ Onlygroub เราให้ความสำคัญกับความคิดเห็นของคุณเป็นอย่างยิ่ง ข้อมูลส่วนตัวของคุณจะถูกเก็บรักษาเป็นความลับ และเราจะนำข้อเสนอแนะของคุณไปปรับปรุงเว็บไซต์ให้ดียิ่งขึ้น</p> </div> <!-- End Title --> <!-- Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16"> <div class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0"> <form> <div class="space-y-4"> <!-- Input --> <div class="relative"> <input type="text" id="hs-tac-input-name" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2" placeholder="Name"> <label for="hs-tac-input-name" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">ชื่อ</label> </div> <!-- End Input --> <!-- Input --> <div class="relative"> <input type="email" id="hs-tac-input-email" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2" placeholder="Email"> <label for="hs-tac-input-email" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">อีเมล</label> </div> <!-- End Input --> <!-- Input --> <div class="relative"> <input type="text" id="hs-tac-input-phone" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2" placeholder="Phone"> <label for="hs-tac-input-phone" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">เบอร์โทรติดต่อ</label> </div> <!-- End Input --> <!-- Textarea --> <div class="relative"> <textarea id="hs-tac-message" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6
                    focus:pb-2
                    [&:not(:placeholder-shown)]:pt-6
                    [&:not(:placeholder-shown)]:pb-2
                    autofill:pt-6
                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea> <label for="hs-tac-message" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">ข้อความ</label> </div> <!-- End Textarea --> </div> <div class="mt-2"> <p class="text-xs text-neutral-500">
กรุณาระบุข้อมูลให้ครบถ้วน
</p> <p class="mt-5"> <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="#">
ส่งข้อความ
<svg class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </p> </div> </form> </div> <!-- End Col --> <div class="space-y-14"> <!-- Item --> <div class="flex gap-x-5"> <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg> <div class="grow"> <h4 class="text-white font-semibold">Email us:</h4> <a class="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200" href="mailto:support@onlygroub.com" target="_blank">
support@onlygroub.com
</a> </div> </div> <!-- End Item --> <!-- Item --> <div class="flex gap-x-5"> <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg> <div class="grow"> <h4 class="text-white font-semibold">เรายินดีรับทุกความคิดเห็น</h4> <p class="mt-1 text-neutral-400">เราจะตอบกลับท่านภายใน 48 ชั่วโมงหลังจากที่ได้รับข้อความ</p> </div> </div> <!-- End Item --> </div> <!-- End Col --> </div> <!-- End Grid --> </div> ` })} ` })}`;
}, "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/contact.astro", void 0);

const $$file = "/home/bomboonsan/Desktop/Astro/onlygroub-pnpm/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
