

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.8a0aff18.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.b2bfadf0.js","_app/immutable/chunks/SmallParagraph.ef1ca6d0.js","_app/immutable/chunks/RawButton.cb63e1af.js","_app/immutable/chunks/index.e4da4940.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.7cf8cca3.css"];
export const fonts = [];
