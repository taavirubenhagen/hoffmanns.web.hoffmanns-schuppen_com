

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.69cbb7c4.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/ua-parser.87cb26f2.js","_app/immutable/chunks/SmallParagraph.be7199e9.js","_app/immutable/chunks/RawButton.d6841fd0.js","_app/immutable/chunks/state.1c958ab2.js","_app/immutable/chunks/index.a2018c2b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.d9026b37.css"];
export const fonts = [];
