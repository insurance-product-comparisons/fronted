import React from 'react';
import { Button, Logo, Typography } from 'shared/ui';
import { Rating, InsuranceConditionsResult } from 'components';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ResultCard.module.scss';

function ResultCard({ data }) {
	const navigate = useNavigate();
	const location = useLocation();

	function handleClickMore() {
		navigate(`${location.pathname}/${data.code}`);
	}

	return (
		<div className={styles.container} key={data.id}>
			<div className={styles['container-company']}>
				<Logo mode={'result'}></Logo>
				<div className={styles['rating']}>
					<Typography variant={'body1'}>{data.company}</Typography>
					<Rating rating={data.rating}></Rating>
				</div>
			</div>
			<InsuranceConditionsResult data={data}></InsuranceConditionsResult>
			<div className={styles['container-button']}>
				<Button
					type="button"
					bgcolor="ghost"
					mode="more"
					onClick={handleClickMore}
				>
					Подробнее
				</Button>
				<Button type="button" bgcolor="accent" mode="result">
					Перейти на сайт
				</Button>
			</div>
		</div>
	);
}

export default ResultCard;
