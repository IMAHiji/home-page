export type PageType = {
	title: string;
	url: string;
	icon?: string;
};

export type SitesType = {
	pages: PageType[];
};

const sites: SitesType = {
	pages: [
		{
			title: 'Hacker News',
			url: 'https://news.ycombinator.com/'
		},
		{
			title: 'PC Gamer',
			url: 'https://www.pcgamer.com/',
			icon: 'icon-keyboard'
		},
		{
			title: 'PC Games N',
			url: 'https://www.pcgamesn.com/'
		},
		{
			title: 'Reddit',
			url: 'https://www.reddit.com/',
			icon: 'icon-reddit'
		},
		{
			title: 'Youtube',
			url: 'https://www.youtube.com/',
			icon: 'icon-youtube'
		},
		{
			title: 'W Underground',
			url: 'https://www.wunderground.com/',
			icon: 'icon-onedrive'
		},
		{
			title: 'Overreacted',
			url: 'https://overreacted.io/',
			icon: 'icon-embed2'
		}
	]
};

export default sites;
