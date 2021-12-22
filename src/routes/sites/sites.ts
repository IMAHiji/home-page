export type PageType = {
	title: string;
	url: string;
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
			url: 'https://www.pcgamer.com/'
		},
		{
			title: 'PC Games N',
			url: 'https://www.pcgamesn.com/'
		},
		{
			title: 'Reddit',
			url: 'https://www.reddit.com/'
		},
		{
			title: 'Youtube',
			url: 'https://www.youtube.com/'
		},
		{
			title: 'W Underground',
			url: 'https://www.wunderground.com/'
		},
		{
			title: 'Overreacted',
			url: 'https://overreacted.io/'
		}
	]
};

export default sites;
