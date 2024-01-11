import {
	ProductContainer,
	ConsultForm,
	AnswersList,
	InsuranceCompanies,
	Section,
	SuccessfulRequest,
} from 'components';
import CARD_ITEMS from 'shared/utils/constants/CARD_ITEMS';
import { ANSWERS_MAIN } from 'shared/store/answers';
import { FOR_COMPANIES, FOR_REQUEST } from 'shared/store/companies';
import { MORE, SUB_REQUEST } from 'shared/utils/constants/modes';
import { useState } from 'react';
import styles from './Main.module.scss';

function Main() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	function handleFormSubmit() {
		setFormSubmitted(true);
	}

	return (
		<main className={styles.root}>
			<Section>
				<ProductContainer data={CARD_ITEMS} />
			</Section>
			<Section>
				<InsuranceCompanies
					data={FOR_COMPANIES}
					nameButton={'Подробнее'}
					modeButton={MORE}
				/>
			</Section>
			<Section>
				<div
					className={`${styles.formWrapper} ${
						formSubmitted ? styles.invisibly : ''
					}`}
				>
					{!formSubmitted && <ConsultForm onSubmit={handleFormSubmit} />}
				</div>
				<div
					className={`${styles.requestWrapper} ${
						formSubmitted ? styles.visibly : styles.invisibly
					}`}
				>
					{formSubmitted && (
						<SuccessfulRequest
							title="Заявка на консультацию"
							type="main"
							text="Наш менеджер свяжется с вами в течение часа."
						/>
					)}
				</div>
			</Section>
			<Section>
				<InsuranceCompanies
					data={FOR_REQUEST}
					nameButton={'Отправить заявку'}
					modeButton={SUB_REQUEST}
				/>
			</Section>
			<Section>
				<AnswersList
					title="Вопросы и ответы"
					data={ANSWERS_MAIN}
					fontSize="h2"
				/>
			</Section>
		</main>
	);
}

export default Main;
