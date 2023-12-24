import { Section, UnusualCaseForm } from 'components';
import { Typography } from 'shared/ui';
import styles from './Request.module.scss';

function Request() {
	return (
		<main className={styles.root}>
			<Section>
				<div className={styles['title-wrapper']}>
					<Typography variant={'h2'}>
						Заявка на ситуацию, которой нет в каталоге
					</Typography>
				</div>
			</Section>
			<Section>
				<UnusualCaseForm />
			</Section>
		</main>
	);
}

export default Request;
