module.exports = {
	title: 'ADS 前端开源API',
    dest: 'dist/docs',
    base: '/docs/',
	themeConfig: {
		docsDir: 'src',
		editLinks: true,
		logo: '/logo.png',
		editLinkText: '',
		nav: [
			{ text: 'Home', link: '/' }, 
            { text:'Enum',link: '/enum/' },
			{ text:'Help',link: '/help/' },
		],
		version: '0.11.0-beta'
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-92645815-3'
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.bencodezen.io',
				filter: frontmatter => frontmatter.date <= new Date(),
				count: 20
			}
		]
	],
	head: [
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
