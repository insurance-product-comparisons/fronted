import React from 'react';
import cn from 'classnames';
import styles from './InsuranceConditionsResult.module.scss';

import { Typography } from 'shared/ui';

function InsuranceConditionsResult({ data, page }) {
	return (
		<div
			className={cn(styles.container, { [styles[page]]: page })}
			key={data.id}
		>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={'body2'}>{data.franchise.name}</Typography>
				<Typography variant={'body1'}>{data.franchise.sum}</Typography>
			</div>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={'body2'}>{data.period.name}</Typography>
				<Typography variant={'body1'}>{data.period.value}</Typography>
			</div>
			<div className={cn(styles['conditions-item'], { [styles[page]]: page })}>
				<Typography variant={'body2'}>{data.price.name}</Typography>
				<Typography variant={'body1'}>{data.price.value}</Typography>
			</div>
		</div>
	);
}

export default InsuranceConditionsResult;
