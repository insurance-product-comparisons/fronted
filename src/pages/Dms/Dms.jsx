import {
	AnswersList,
	Breadcrumbs,
	DmcForm,
	Section,
	StagesContainer,
} from 'components';
import { ANSWERS_DMS } from 'shared/store/answers';
import { Typography } from 'shared/ui';
import STEPS_FOR_DMS from 'shared/utils/constants/cardStepDms';
import styles from './Dms.module.scss';

function Dms() {
	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<Section>
				<Typography variant="h2" color="black">
					Добровольное медицинское страхование
				</Typography>
				<StagesContainer data={STEPS_FOR_DMS} />
			</Section>
			<Section>
				<DmcForm />
			</Section>
			<Section>
				<AnswersList
					title="Вопросы и ответы"
					data={ANSWERS_DMS}
					fontSize="h3"
					page="dms"
				/>
			</Section>
		</main>
	);
}

export default Dms;
