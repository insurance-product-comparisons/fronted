import styles from './Card.module.scss';
import cn from 'classnames';
// import { Typography } from 'shared/ui';
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
			{/* <Typography variant='h3'>{data.title}</Typography>
			<Typography variant='body2'>{data.text}</Typography> */}
			<h2 className={cn({ [styles[`title-${mode}`]]: mode })}>{data.title}</h2>
			<p className={cn({ [styles[`text-${mode}`]]: mode })}>{data.text}</p>
			<div className={cn({ [styles[`button-${mode}`]]: mode })}>
				<Button
					type="button"
					children="Рассчитать"
					mode="default"
					bgcolor="bgcolor"
				/>
			</div>
		</section>
	);
}

export default Card;
