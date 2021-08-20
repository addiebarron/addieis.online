const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/projects.svelte"),
	() => import("../../../src/routes/resume.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects.svelte
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/resume.svelte
	[/^\/resume\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/api/create.js
	[/^\/api\/create\/?$/],

	// src/routes/api/delete.js
	[/^\/api\/delete\/?$/],

	// src/routes/api/get.js
	[/^\/api\/get\/?$/]
];

export const fallback = [c[0](), c[1]()];