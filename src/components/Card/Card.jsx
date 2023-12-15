import styles from './Card.module.scss';
import cn from 'classnames';
import { Typography } from 'shared/ui';
import { Button } from 'shared/ui';

function Card({ data, mode }) {
	return (
		<section
			className={cn({
				[styles[mode]]: mode,
			})}
		>
			<img
				className={cn({
					[styles[`image-${mode}`]]: mode,
				})}
				src={data.image}
				alt="Изображение"
			/>
			<div className={cn({ [styles[`title-${mode}`]]: mode })}>
				<Typography variant="h3">{data.title}</Typography>
			</div>
			<Typography variant="body2">{data.text}</Typography>
			<div className={cn({ [styles[`button-${mode}`]]: mode })}>
				<Button type="button" mode="accent" bgcolor="bgcolor" disabled="false">
					Рассчитать
				</Button>
			</div>
		</section>
	);
}

export default Card;
