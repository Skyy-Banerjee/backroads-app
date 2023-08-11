import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
	{ id: 1, href: 'facebook' },
	{ id: 2, href: 'twitter' },
	{ id: 3, href: 'squarespace' },
];

export const servicesData = [
	{
		id: 1,
		iconText: 'wallet',
		title: 'saving money',
		body: 'Travel smart, save big. Budgeting for adventures brings more memories.',
	},
	{
		id: 2,
		iconText: 'tree',
		title: 'amazing hiking',
		body: 'Explore towering peaks and hidden trails. Every step is a journey itself.',
	},
	{
		id: 3,
		iconText: 'socks',
		title: 'endless comfort',
		body: 'Luxury awaits wherever you go. Travel in comfort, cherish every moment.',
	},
];

export const tours = [
	{
		id: 1,
		img: tour1,
		date: 'august 30th, 2023',
		title: 'Tibet Adventure',
		body: "Embark on an ethereal journey through Tibet's mystical landscapes, where ancient monasteries meet breathtaking mountains, and every step unveils a spiritual connection.",
		destination: 'china',
		duration: '6',
		price: '2100',
	},
	{
		id: 2,
		img: tour2,
		date: 'september 26th, 2023',
		title: 'best of Java',
		body: "Discover the enchanting heart of Java, where ancient temples and vibrant cultures converge. From Borobudur's serenity to Jakarta's urban pulse, Java offers wonders.",
		destination: 'indonesia',
		duration: '11',
		price: '1400',
	},
	{
		id: 3,
		img: tour3,
		date: 'january 2nd, 2024',
		title: 'explore Hong Kong',
		body: 'Dive into the dynamic blend of tradition and modernity in Hong Kong. Neon-lit skylines, bustling markets, and tranquil temples form an urban tapestry waiting to be explored.',
		destination: 'hong kong',
		duration: '8',
		price: '5000',
	},
	{
		id: 4,
		img: tour4,
		date: 'january 28th, 2024',
		title: 'Kenya highlights',
		body: "Roam the majestic landscapes of Kenya, where vast savannas play host to the 'Big Five'. Witness the Great Migration and feel the pulse of African wilderness.",
		destination: 'kenya',
		duration: '20',
		price: '3300',
	},
];
