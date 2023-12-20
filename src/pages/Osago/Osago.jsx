import { Breadcrumbs, Section, OsagoForm, AnswersList } from 'components';
import { ANSWERS_OSAGO } from 'shared/store/answers';
import styles from './Osago.module.scss';

function Osago() {
	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<Section>
				<OsagoForm />
			</Section>
			<Section>
				<AnswersList title="Вопросы и ответы" data={ANSWERS_OSAGO} />
			</Section>
		</main>
	);
}

export default Osago;
