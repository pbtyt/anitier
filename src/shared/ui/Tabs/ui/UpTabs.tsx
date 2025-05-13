'use client';

import { SetStateType } from '@/shared/utils/utilTypes';
import clsx from 'clsx';
import {
	Children,
	cloneElement,
	createContext,
	isValidElement,
	PropsWithChildren,
	ReactElement,
	useContext,
	useMemo,
	useState,
} from 'react';
import styles from './UpTabs.module.scss';

type TabsContextType = {
	currentActiveTabIndex: number;
	setCurrentActiveTabIndex: SetStateType<number>;
};
const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
	const context = useContext(TabsContext);
	if (!context)
		throw new Error('useTabContext must be used within a TabsProvider');

	return context;
};

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentActiveTabIndex, setCurrentActiveTabIndex] = useState(0);
	const value = useMemo(
		() => ({ currentActiveTabIndex, setCurrentActiveTabIndex }),
		[currentActiveTabIndex]
	);

	return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

interface ITabProps {
	index?: number;
	title: string;
}
function Tab({ index, title }: ITabProps) {
	const { currentActiveTabIndex, setCurrentActiveTabIndex } = useTabsContext();
	const isActive = index === currentActiveTabIndex;
	return (
		<div
			className={styles.tab}
			onClick={() => setCurrentActiveTabIndex(index ?? currentActiveTabIndex)}
		>
			<span className={clsx(styles.tabText, isActive && styles.active)}>
				{title}
			</span>
		</div>
	);
}

export function UpTabs({ children }: PropsWithChildren<unknown>) {
	return (
		<TabsProvider>
			<div className={styles.tabs}>
				{Children.map(children, (child, index) => {
					const item = child as ReactElement<PropsWithChildren<ITabProps>>;
					if (isValidElement(child)) {
						return cloneElement(item, { ...item.props, index: index });
					}

					return child;
				})}
			</div>
		</TabsProvider>
	);
}

UpTabs.Tab = Tab;
