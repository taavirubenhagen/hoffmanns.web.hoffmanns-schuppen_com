import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.54c1a8da.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.1a96785d.js","_app/immutable/chunks/SmallHeading.8a1659eb.js","_app/immutable/chunks/Section.11110a9c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8ff71c75.css"];
export const fonts = [];
