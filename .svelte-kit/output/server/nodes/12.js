

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produkte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.32dada56.js","_app/immutable/chunks/index.bbc92f60.js","_app/immutable/chunks/ua-parser.8607bdc8.js","_app/immutable/chunks/MediumHeading.f45431d1.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.5d697239.css"];
export const fonts = [];
