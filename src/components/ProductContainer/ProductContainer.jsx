import Card from 'components/Card';
import styles from './ProductContainer.module.scss';
import cn from 'classnames';

function ProductContainer({ data, mode }) {
	return (
		<section className={cn({ [styles[mode]]: mode })}>
			<h2 className={cn({ [styles[`title-${mode}`]]: mode })}>
				Сравнивайте страховки онлайн
			</h2>
			<div className={cn({ [styles[`container-${mode}`]]: mode })}>
				{data.map((item, index) => (
					<Card data={item} key={index} mode="default" />
				))}
			</div>
		</section>
	);
}

export default ProductContainer;
