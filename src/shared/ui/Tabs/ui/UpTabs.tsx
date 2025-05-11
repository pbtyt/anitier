import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './UpTabs.module.scss';

function Tab({
	title,
	isActive = false,
}: {
	title: string;
	isActive?: boolean;
}) {
	return (
		<div className={styles.tab}>
			<span className={clsx(styles.tabText, isActive && styles.active)}>
				{title}
			</span>
		</div>
	);
}

export function UpTabs({ children }: PropsWithChildren<unknown>) {
	return <div className={styles.tabs}>{children}</div>;
}

UpTabs.Tabs = UpTabs;
UpTabs.Tab = Tab;
