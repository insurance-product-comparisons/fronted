import React from 'react';

import { Button, Logo, Typography } from 'shared/ui';

import { Rating, InsuranceConditionsResult } from 'components';

import styles from './ResultCard.module.scss';

function ResultCard({ data }) {
	return data.map((data) => (
		<div className={styles.container} key={data.id}>
			<div className={styles['container-company']}>
				<Logo mode={'result'}></Logo>
				<div className={styles['rating']}>
					<Typography variant={'body1'}>{data.company}</Typography>
					<Rating rating={data.rating}></Rating>
				</div>
			</div>
			<div
				className={
					!data.franchise && !data.insuranceAmount
						? styles['container-conditions']
						: ''
				}
			>
				<InsuranceConditionsResult data={data}></InsuranceConditionsResult>
			</div>
			<div className={styles['container-button']}>
				<Button type="button" bgcolor="ghost" mode="more">
					Подробнее
				</Button>
				<Button type="button" bgcolor="accent" mode="result">
					Перейти на сайт
				</Button>
			</div>
		</div>
	));
}

export default ResultCard;
