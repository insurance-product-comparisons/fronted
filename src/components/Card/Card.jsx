import cn from 'classnames';
import { Typography, Button } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';

function Card({ data, mode = DEFAULT }) {
	const navigate = useNavigate();

	function handleCardClick() {
		navigate(data.route);
	}
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
				<Button
					type="button"
					mode="accent"
					bgcolor="bgcolor"
					onClick={handleCardClick}
				>
					Рассчитать
				</Button>
			</div>
		</section>
	);
}

export default Card;
