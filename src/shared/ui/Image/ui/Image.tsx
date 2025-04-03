import clsx from 'clsx';
import styles from './Image.module.scss';

//TOOD: Extend From img attribute
interface IImageProps {
	src?: string;
	alt?: string;

	className?: string;
}

export function Image({ src = '', alt = '', className }: IImageProps) {
	return (
		<div className={clsx(styles.imgWrapper, className)}>
			<img src={src} alt={alt} className={styles.img} />
		</div>
	);
}
