

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.35d82f39.js","_app/immutable/chunks/index.1b07a146.js","_app/immutable/chunks/ua-parser.dbf68c38.js","_app/immutable/chunks/MediumHeading.addc6077.js","_app/immutable/chunks/Section.ab14c9c1.js","_app/immutable/chunks/Button.1bde3e55.js","_app/immutable/chunks/SmallParagraph.f9b830aa.js","_app/immutable/chunks/RawButton.4b121e4d.js","_app/immutable/chunks/index.8e8fe62f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.6e92a6a8.css"];
export const fonts = [];
