import React from 'react';
import { REG_VALUE, REG_SPACE } from 'shared/utils/constants/regEx';
import styles from './InsuranceConditionsResult.module.scss';

import { Typography } from 'shared/ui';

function InsuranceConditionsResult({ data }) {
	return (
		<div className={styles.container} key={data.id}>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.franchise.name}</Typography>

				<Typography variant={'body1'}>
					<span className={styles['value-container']}>
						{data.franchise.sum.replace(REG_VALUE, REG_SPACE)}
					</span>
				</Typography>
			</div>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.period.name}</Typography>
				<Typography variant={'body1'}>
					<span className={styles['year-container']}>{data.period.value}</span>
				</Typography>
			</div>
			<div className={styles['conditions-item']}>
				<Typography variant={'body2'}>{data.price.name}</Typography>
				<Typography variant={'body1'}>
					<span className={styles['value-container']}>
						{data.price.value.replace(REG_VALUE, REG_SPACE)}
					</span>
				</Typography>
			</div>
		</div>
	);
}

export default InsuranceConditionsResult;
