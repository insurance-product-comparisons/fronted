import styles from './Card.module.scss';
// import { Button } from 'shared/ui';

function Card({ data, mode }) {
	return (
		<section className={styles[mode]}>
			<img
				className={styles[`image-${mode}`]}
				src={data.image}
				alt="Изображение"
			/>
			<h2 className={styles[`title-${mode}`]}>{data.title}</h2>
			<p className={styles[`text-${mode}`]}>{data.text}</p>
			{/* <Button type='button' children='Рассчитать' mode='default' bgcolor='bgcolor' /> */}
		</section>
	);
}

export default Card;
