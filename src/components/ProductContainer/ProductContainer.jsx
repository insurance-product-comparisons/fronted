import Card from 'components/Card';
import { Typography } from 'shared/ui';
import styles from './ProductContainer.module.scss';
import cn from 'classnames';

function ProductContainer({ data, mode }) {
	return (
		<section className={cn({ [styles[mode]]: mode })}>
			<div className={cn({ [styles[`title-${mode}`]]: mode })}>
				<Typography variant="h2">Сравнивайте страховки онлайн</Typography>
			</div>
			<div className={cn({ [styles[`container-${mode}`]]: mode })}>
				{data.map((item, index) => (
					<Card data={item} key={index} mode="default" />
				))}
			</div>
		</section>
	);
}

export default ProductContainer;
