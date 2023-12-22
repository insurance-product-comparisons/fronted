import cn from 'classnames';
import styles from './SuccessfulRequest.module.scss';
import { Typography } from 'shared/ui';

function SuccessfulRequest({ type, text }) {
	return (
		<section className={cn(styles.default, { [styles[type]]: type })}>
			<div className={styles['icon-and-text']}>
				<div className={styles['icon-success']}></div>
				<div className={styles.text}>
					<Typography variant="h4" color="black">
						Заявка успешно отправлена.
					</Typography>
					<Typography variant="h4" color="black">
						{text}
					</Typography>
				</div>
			</div>
			<div className={cn(styles.img, { [styles[type]]: type })}></div>
		</section>
	);
}

export default SuccessfulRequest;
