import React from 'react';
import styles from './Rating.module.scss';
// import cn from 'classnames';

import ratingStar from 'images/rating-star.svg';

function Rating({ rating }) {
	return (
		<div className={styles.container}>
			{[...Array(rating)].map(() => {
				return <img src={ratingStar} alt="Звёздочка" className={styles.star} />;
			})}
		</div>
	);
}

export default Rating;
