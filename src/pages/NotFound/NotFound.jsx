import { Section } from 'components';
import { Typography } from 'shared/ui';
import styles from './NotFound.module.scss';

function NotFound() {
	return (
		<main className={styles.root}>
			<Section>
				<div className={styles.container}>
					<Typography variant={'h5'}>
						<span className={styles.title}>404</span>
					</Typography>
					<Typography variant={'h4'}>Этой страницы не существует.</Typography>
				</div>
			</Section>
		</main>
	);
}

export default NotFound;
