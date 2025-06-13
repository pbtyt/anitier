//TODO: Entity ?
type BadgeTierType = 'S+' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D';

export type BadgeType = {
	tier: BadgeTierType;
	color: string;
	minInterest: number;
	maxInterest: number;
};

export const BADGE_CONFIG: BadgeType[] = [
	{
		tier: 'S+',
		color: '#FB4934',
		minInterest: 4.84, //maybe no
		maxInterest: 5,
	},
	{
		tier: 'S',
		color: '#FE8019',
		minInterest: 4.375,
		maxInterest: 4.84, //maybe no
	},
	{
		tier: 'A+',
		color: '#FABD2F',
		minInterest: 3.75,
		maxInterest: 4.375,
	},
	{
		tier: 'A',
		color: '#B8BB26',
		minInterest: 3.125,
		maxInterest: 3.75,
	},
	{
		tier: 'B+',
		color: '#8EC07C',
		minInterest: 2.5,
		maxInterest: 3.125,
	},
	{
		tier: 'B',
		color: '#83A598',
		minInterest: 1.875,
		maxInterest: 2.5,
	},
	{
		tier: 'C+',
		color: '#458588',
		minInterest: 1.25,
		maxInterest: 1.875,
	},
	{
		tier: 'C',
		color: '#D3869B',
		minInterest: 0.625,
		maxInterest: 1.25,
	},
	{
		tier: 'D',
		color: '#928374',
		minInterest: 0,
		maxInterest: 0.625,
	},
];
