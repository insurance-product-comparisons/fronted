import {
	ProductContainer,
	ConsultForm,
	AnswersList,
	InsuranceCompanies,
	Section,
} from 'components';
import CARD_ITEMS from 'shared/utils/constants/CARD_ITEMS';
import { ANSWERS_MAIN } from 'shared/store/answers';
import { FOR_COMPANIES, FOR_REQUEST } from 'shared/store/companies';
import styles from './Main.module.scss';

function Main() {
	return (
		<main className={styles.root}>
			<Section>
				<ProductContainer data={CARD_ITEMS} />
			</Section>
			<Section>
				<InsuranceCompanies
					data={FOR_COMPANIES}
					nameButton={'Подробнее'}
					modeButton={'more'}
				/>
			</Section>
			<Section>
				<ConsultForm />
			</Section>
			<Section>
				<InsuranceCompanies
					data={FOR_REQUEST}
					nameButton={'Отправить заявку'}
					modeButton={'submit-request'}
				/>
			</Section>
			<Section>
				<AnswersList title="Вопросы и ответы" data={ANSWERS_MAIN} />
			</Section>
		</main>
	);
}

export default Main;
