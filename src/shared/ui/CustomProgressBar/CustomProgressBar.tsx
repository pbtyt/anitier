import { CSSProperties } from 'react';
import { CustomStar } from '../Star/Star';
import styles from './CustomProgressBar.module.scss';

interface ICustomProgressBarProps {
	percentage: number;
}

//TODO: Add Progressbar Percentage Element To Props.
//TODO: Re-write with compound components pattern?
export function CustomProgressBar({ percentage }: ICustomProgressBarProps) {
	const progressBarSetting = {
		'--percentage': `${percentage}%`,
	} as CSSProperties;

	return (
		<div className={styles.customBarWrapper}>
			<div className={styles.customBarBg}>
				<CustomStar />
				<CustomStar />
				<CustomStar />
				<CustomStar />
				<CustomStar />
			</div>
			<div className={styles.customBarProgress} style={progressBarSetting}>
				<CustomStar isActive />
				<CustomStar isActive />
				<CustomStar isActive />
				<CustomStar isActive />
				<CustomStar isActive />
			</div>
		</div>
	);
}
