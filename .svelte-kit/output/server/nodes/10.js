

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/investor-relations/bedingungen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.e97262e7.js","_app/immutable/chunks/index.61bf405e.js"];
export const stylesheets = [];
export const fonts = [];
