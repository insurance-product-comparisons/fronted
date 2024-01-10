import {
	Breadcrumbs,
	Section,
	OsagoForm,
	AnswersList,
	StagesContainer,
} from 'components';
import { Typography } from 'shared/ui';
import { ANSWERS_OSAGO } from 'shared/store/answers';
import CARD_STAGES from 'shared/utils/constants/cardStages';
import styles from './Osago.module.scss';

function Osago() {
	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<Section>
				<Typography variant={'h2'}>Страхование ОСАГО</Typography>
			</Section>
			<Section>
				<StagesContainer data={CARD_STAGES} />
			</Section>
			<Section>
				<OsagoForm />
			</Section>
			<Section>
				<AnswersList
					title="Вопросы и ответы"
					data={ANSWERS_OSAGO}
					fontSize="h3"
					page="osago"
				/>
			</Section>
		</main>
	);
}

export default Osago;
