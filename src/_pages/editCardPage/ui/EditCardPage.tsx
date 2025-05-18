import { UploadImage } from '@/features/uploadImage';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './EditCardPage.module.scss';

interface IInputBlock {
	//TODO: Remove "?"
	gridMarker: string;
	placeholder: string;
	title: string;
}
function InputBlock({
	gridMarker,
	title,
	children,
}: PropsWithChildren<IInputBlock>) {
	return (
		<div className={clsx(styles.inputBlock, gridMarker)}>
			<span className={styles.inputBlockTitle}>{title}</span>
			{children}
		</div>
	);
}

export function EditCardPage({ id }: { id: string }) {
	return (
		<div className={styles.wrapper}>
			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<h3>General</h3>
				</div>
				<div className={styles.sectionContent}>
					<div className={styles.gridWrapper}>
						<InputBlock
							gridMarker={styles.enterTitle}
							placeholder={'Enter the title...'}
							title={'Title'}
						/>
						<InputBlock
							gridMarker={styles.enterTitleTranslation}
							placeholder={'Enter the translation...'}
							title={'Translation'}
						/>
						<InputBlock
							gridMarker={styles.enterTitleSlug}
							placeholder={'Enter the slug...'}
							title={'Slug'}
						/>
						<InputBlock
							gridMarker={styles.enterTitleDesc}
							placeholder={'Enter the description...'}
							title={'Description'}
						/>
						<div className={styles.chooseTitlePoster}>
							<UploadImage entityData={{ entity: 'card', entityId: id }} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
