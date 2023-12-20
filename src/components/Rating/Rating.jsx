import React from 'react';
import styles from './Rating.module.scss';

import { Typography } from 'shared/ui';

function Rating({ rating }) {
	const ratingValue = rating >= 0 ? rating : 0;

	return (
		<div className={styles.container}>
			<div className={styles['container-star']}>
				{[...Array(ratingValue)].map((_, id) => {
					return <div key={id} className={styles.star}></div>;
				})}
			</div>
			<Typography variant={'body2'}>{rating}</Typography>
		</div>
	);
}

export default Rating;
