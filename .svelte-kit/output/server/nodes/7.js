

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/countdown/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.24b54b43.js","_app/immutable/chunks/index.ad1ab6c3.js","_app/immutable/chunks/ua-parser.1a96785d.js","_app/immutable/chunks/SmallParagraph.11871bdb.js","_app/immutable/chunks/RawButton.1d2735b2.js","_app/immutable/chunks/index.deee6f29.js","_app/immutable/chunks/Section.11110a9c.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.8ff71c75.css"];
export const fonts = [];
