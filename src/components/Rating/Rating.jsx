import React from 'react';
import styles from './Rating.module.scss';

import { Typography } from 'shared/ui';

function Rating({ rating }) {
	const fullRating = rating >= 4.8 ? 5 : Math.floor(rating);

	const renderStar = (id) =>
		id < fullRating ? (
			<div key={id} className={styles.star}></div>
		) : (
			<div key={id} className={styles['null-star']}></div>
		);

	return (
		<div className={styles.container}>
			<div className={styles['container-star']}>
				{[...Array(5)].map((_, id) => {
					return renderStar(id);
				})}
			</div>
			<Typography variant={'body2'}>{rating}</Typography>
		</div>
	);
}

export default Rating;
