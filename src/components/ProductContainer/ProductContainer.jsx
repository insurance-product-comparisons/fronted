import Card from 'components/Card';
import styles from './ProductContainer.module.scss';

function ProductContainer({ data, mode }) {
	return (
		<section className={styles[mode]}>
			<h2 className={styles[`title-${mode}`]}>Сравнивайте страховки онлайн</h2>
			<div className={styles[`container-${mode}`]}>
				{data.map((item, index) => (
					<Card data={item} key={index} mode="default" />
				))}
			</div>
		</section>
	);
}

export default ProductContainer;
