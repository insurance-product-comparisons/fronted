import {
	ProductContainer,
	ConsultForm,
	AnswersList,
	InsuranceCompanies,
} from 'components';
import cardItems from 'shared/utils/constants/cardItems';
import { answersMain } from 'shared/store/answersMain';
import styles from './Main.module.scss';

function Main() {
	return (
		<>
			<main className={styles.root}>
				<ProductContainer data={cardItems} mode="default" />
				<InsuranceCompanies
					title={'Страховым компаниям'}
					description={
						'Мы привлекаем страховые компании для страхования имущества и здоровья клиентов. Ознакомьтесь с обязательными требованиями и условиями.'
					}
					nameButton={'Подробнее'}
					modeButton={'more'}
					disabled={false}
				/>
				<ConsultForm />
				<InsuranceCompanies
					title={'Не нашли в каталоге свой страховой случай?'}
					description={
						'Если вы не увидели в каталоге нужный вам страховой случай, то вы можете отправить заявку. В течение 2 рабочих дней мы рассмотрим ваш запрос и ответим на указанный email.'
					}
					nameButton={'Отправить заявку'}
					modeButton={'submit-request'}
					disabled={false}
				/>
				<AnswersList title="Вопросы и ответы" data={answersMain} />
			</main>
		</>
	);
}

export default Main;
