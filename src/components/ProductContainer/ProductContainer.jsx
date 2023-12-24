import { Card } from 'components';
import { Typography } from 'shared/ui';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './ProductContainer.module.scss';

function ProductContainer({ data, mode = DEFAULT }) {
	return (
		<div className={cn({ [styles[mode]]: mode })}>
			<div className={cn({ [styles[`title-${mode}`]]: mode })}>
				<Typography variant="h2">Сравнивайте страховки онлайн</Typography>
			</div>
			<div className={cn({ [styles[`container-${mode}`]]: mode })}>
				{data.map((item, id) => (
					<Card data={item} key={id} />
				))}
			</div>
		</div>
	);
}

export default ProductContainer;
