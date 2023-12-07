import Card from 'components/Card';
import styles from './ProductContainer.module.scss';

function ProductContainer() {
	return (
		<section className={styles.insurance}>
			<h2 className={styles.title}>Страхование</h2>
			<div className={styles.container}>
				<Card
					name="ОСАГО"
					image="изображение"
					information="описание вида страхования"
				/>
				<Card
					name="КАСКО"
					image="изображение"
					information="описание вида страхования"
				/>
				<Card
					name="ДМС"
					image="изображение"
					information="описание вида страхования"
				/>
			</div>
			<p className={styles.text}>
				Если вы не увидели в каталоге нужный вам страховой случай, то вы можете
				Оставить заявку. В течение 2 рабочих дней мы рассмотрим ваш запрос и
				ответим на указанный email.
			</p>
		</section>
	);
}

export default ProductContainer;
