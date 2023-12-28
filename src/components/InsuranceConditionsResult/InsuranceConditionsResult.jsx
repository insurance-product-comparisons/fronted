import React from 'react';
import styles from './InsuranceConditionsResult.module.scss';

import { Typography } from 'shared/ui';

function InsuranceConditionsResult({ data }) {
	return (
		<div className={styles.container} key={data.id}>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.franchise.name}</Typography>
				<Typography variant={'body1'}>{data.franchise.sum}</Typography>
			</div>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.period.name}</Typography>
				<Typography variant={'body1'}>{data.period.value}</Typography>
			</div>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.price.name}</Typography>
				<Typography variant={'body1'}>{data.price.value}</Typography>
			</div>
		</div>
	);
}

export default InsuranceConditionsResult;
