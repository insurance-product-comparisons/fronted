import React from 'react';
import { REG_VALUE, REG_SPACE } from 'shared/utils/constants/regEx';
import cn from 'classnames';
import styles from './InsuranceConditionsResult.module.scss';

import { Typography } from 'shared/ui';

function InsuranceConditionsResult({ data, page, font }) {
	return (
		<div className={cn(styles.container, { [styles[page]]: page })}>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={font || 'body2'}>
					{data ? data.franchise.name : '-'}
				</Typography>
				<Typography variant={'body1'}>
					<span className={styles['value-container']}>
						{data ? data.franchise.sum.replace(REG_VALUE, REG_SPACE) : '-'}
					</span>
				</Typography>
			</div>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={font || 'body2'}>
					{data ? data.period.name : '-'}
				</Typography>
				<Typography variant={'body1'}>
					<span className={styles['year-container']}>
						{data ? data.period.value : '-'}
					</span>
				</Typography>
			</div>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={font || 'body2'}>
					{data ? data.price.name : '-'}
				</Typography>
				<Typography variant={'body1'}>
					<span className={styles['value-container']}>
						{data ? data.price.value.replace(REG_VALUE, REG_SPACE) : '-'}
					</span>
				</Typography>
			</div>
		</div>
	);
}

export default InsuranceConditionsResult;
