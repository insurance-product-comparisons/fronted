import { ProductContainer, ConsultForm, AnswersList } from 'components';
import cardItems from 'shared/utils/constants/cardItems';
import { answersMain } from 'shared/store/answersMain';
import styles from './Main.module.scss';

function Main() {
	return (
		<>
			<main className={styles.root}>
				<ProductContainer data={cardItems} mode="default" />
				<ConsultForm />
				<AnswersList
					title="Вопросы и ответы"
					data={answersMain}
					mode="default"
				/>
			</main>
		</>
	);
}

export default Main;
