const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["data.yaml","fonts/inconsolata/inconsolata-v20-latin-700.eot","fonts/inconsolata/inconsolata-v20-latin-700.svg","fonts/inconsolata/inconsolata-v20-latin-700.ttf","fonts/inconsolata/inconsolata-v20-latin-700.woff","fonts/inconsolata/inconsolata-v20-latin-700.woff2","fonts/inconsolata/inconsolata-v20-latin-regular.eot","fonts/inconsolata/inconsolata-v20-latin-regular.svg","fonts/inconsolata/inconsolata-v20-latin-regular.ttf","fonts/inconsolata/inconsolata-v20-latin-regular.woff","fonts/inconsolata/inconsolata-v20-latin-regular.woff2","images/a.jpg","images/favicon.png","resume.pdf"]),
	mimeTypes: {".yaml":"text/yaml",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".png":"image/png",".pdf":"application/pdf"},
	_: {
		entry: {"file":"start-3dc197ac.js","js":["start-3dc197ac.js","chunks/index-169adf5d.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
