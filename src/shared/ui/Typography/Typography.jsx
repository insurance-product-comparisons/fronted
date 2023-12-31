import React from 'react';
import cn from 'classnames';
import { VARIANTS_MAPPING } from 'shared/utils/constants/typography_var';
import styles from './Typography.module.scss';

function Typography({ variant, color, children, padding, ...args }) {
	const Component = variant ? VARIANTS_MAPPING[variant] : 'p';
	return (
		<Component
			className={cn({
				[styles[`typography--variant-${variant}`]]: variant,
				[styles[`typography--color-${color}`]]: color,
				[styles[`typography--padding-${padding}`]]: padding,
			})}
			{...args}
		>
			{children}
		</Component>
	);
}

export default Typography;
