import {
	AnswersList,
	Breadcrumbs,
	KaskoForm,
	Section,
	StagesContainer,
} from 'components';
import { Typography } from 'shared/ui';
import { ANSWERS_KASKO } from 'shared/store/answers';
import CARD_STAGES from 'shared/utils/constants/cardStages';
import styles from './Kasko.module.scss';

function Kasko() {
	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<Section>
				<Typography variant={'h2'} children="Страхование КАСКО" />
			</Section>
			<Section>
				<StagesContainer data={CARD_STAGES} />
			</Section>
			<Section>
				<KaskoForm />
			</Section>
			<Section>
				<AnswersList title="Вопросы и ответы" data={ANSWERS_KASKO} />
			</Section>
		</main>
	);
}

export default Kasko;
