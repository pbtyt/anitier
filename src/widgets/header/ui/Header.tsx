import { House } from 'lucide-react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Profile } from './profile/Profile';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				{/* TODO: Need Logo */}
				<h3>Anitier</h3>
			</div>
			<nav className={styles.menu}>
				<ul className={styles.menuItems}>
					<li>
						<Link href={''} className={styles.menuItem}>
							<div className={styles.iconWrapper}>
								<House className={styles.icon} />
							</div>
							<span>Главная</span>
						</Link>
					</li>
					<li>
						<Link href={''} className={styles.menuItem}>
							<div className={styles.iconWrapper}>
								<House className={styles.icon} />
							</div>
							<span>Главная</span>
						</Link>
					</li>
					<li>
						<Link href={''} className={styles.menuItem}>
							<div className={styles.iconWrapper}>
								<House className={styles.icon} />
							</div>
							<span>Главная</span>
						</Link>
					</li>
				</ul>
			</nav>

			{/* TODO: Account Button */}
			<Profile />
		</header>
	);
}
