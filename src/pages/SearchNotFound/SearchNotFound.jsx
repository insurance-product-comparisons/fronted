import { Section } from 'components';
import { Typography } from 'shared/ui';
import styles from './SearchNotFound.module.scss';

function SearchNotFound() {
	return (
		<main className={styles.root}>
			<Section>
				<div className={styles.container}>
					<div className={styles.image}></div>
					<div className={styles['text-wrapper']}>
						<Typography variant="h4">
							К сожалению ничего не найдено...
						</Typography>
						<Typography variant="h4">
							Попробуйте сформулировать запрос по-другому.
						</Typography>
					</div>
				</div>
			</Section>
		</main>
	);
}

export default SearchNotFound;
