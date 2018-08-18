module.exports = {
	head: [
    	['link', { rel: 'icon', href: '/logo.png' }]
  	],
	title: 'Belajar Vue.js',
	description: 'Belajar Vue.js bahasa Indonesia',
	themeConfig:{
		nav:[
			{ text: 'Another Page', link: '/hello.html'}
		],
		sidebar:[
			'/content/bab1',
			'/content/bab2',
			'/content/bab3',
			'/content/bab4',
		]
	},
	markdown: {
    	lineNumbers: true
  	},
}
