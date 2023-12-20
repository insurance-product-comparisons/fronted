import React from 'react';
import styles from './InsuranceConditionsResult.module.scss';

import { Typography } from 'shared/ui';

function InsuranceConditionsResult({ data }) {
	return (
		<div className={styles.container}>
			<div className={styles.conditions} key={data.id}>
				{data.franchise && (
					<div className={styles['conditions-item']}>
						<Typography variant={'body2'}>{data.franchise.name}</Typography>
						<Typography variant={'body1'}>{data.franchise.sum}</Typography>
					</div>
				)}
				{data.insuranceAmount && (
					<div className={styles['conditions-item']}>
						<Typography variant={'body2'}>
							{data.insuranceAmount.name}
						</Typography>
						<Typography variant={'body1'}>
							{data.insuranceAmount.sum}
						</Typography>
					</div>
				)}
				<div className={styles['conditions-item']}>
					<Typography variant={'body2'}>{data.period.name}</Typography>
					<Typography variant={'body1'}>{data.period.value}</Typography>
				</div>
				<div className={styles['conditions-item']}>
					<Typography variant={'body2'}>{data.price.name}</Typography>
					<Typography variant={'body1'}>{data.price.value}</Typography>
				</div>
			</div>
		</div>
	);
}

export default InsuranceConditionsResult;
